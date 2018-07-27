
cc.Class({
    extends: cc.Component,

    properties: {
        // speed: 15,
        // radius: 190,
        obstaclePrefab: {
            default: null,
            type: cc.Prefab
        },
    },

    //绘制关卡内容
    drawLevelContent: function(levelContent){
        //如果已经有障碍物则清除
        for (i in this.node.children)
            this.node.children[i].destroy()
        
        const obstacle = this.levelSetup.obstacle

        let currentPosY = 800 //预设距离，留下500，或者此值在preSet中亦可

        let self = this
        let obswid, obshei, obsX

        //根据障碍物的align，计算x坐标
        const calculatePosX = function (alignMethod) {
            switch (alignMethod) {
                case "left":
                    return obswid / 2
                case "right":
                    return self.node.width - (obswid / 2)
                case "middle":
                    return self.node.width / 2
                case "float_left":
                    return self.node.width * 5 / 16
                case "float_right":
                    return self.node.width * 11 / 16
                case "rightMost":
                    return self.node.width - self.inputInfo.animationInfo.posXDebt
                case "leftMost":
                    return 0 + self.inputInfo.animationInfo.posXDebt
                default:
                    console.log('wrong align: ' + alignMethod)
                    return
            }
        }

        for (let obs of levelContent) {
            //计算大小和位置信息
            obswid = obstacle[obs.class][obs.type].width
            obshei = obstacle[obs.class][obs.type].height
            currentPosY += obs.distanceToPre * this.spacing //在Y位置画
            obsX = calculatePosX(obs.align)

            //添加节点以及精灵
            let childnode = cc.instantiate(self.obstaclePrefab)
            self.node.addChild(childnode)

            //设置位置
            childnode.width = obswid
            childnode.height = obshei
            childnode.setPosition(cc.p(obsX, currentPosY))
            childnode.originX = childnode.x
            childnode.originY = childnode.y

            //设置碰撞
            let col = childnode.getComponents(cc.Collider)[0]
            col.size.width = obswid
            col.size.height = obshei

            //特殊组件
            if (obs.class == 'Whirl') {
                switch (obs.type) {
                    case "RotMidStrip":
                        childnode.addComponent('midRotate')
                        break
                    case "RotSideStrip":
                        childnode.addComponent('sideRotate')
                        break
                }
                if (obs.rotateDir === 'L') childnode.rotateDirection = 1
                else childnode.rotateDirection = -1
            }

            //动画效果
            if (obs.moveDown) {
                childnode.addComponent('moveDown')
                childnode.getComponent('moveDown').beginDis = obs.moveDown.distance
                childnode.getComponent('moveDown').speedScale = obs.moveDown.speedScale
            }
            if (obs.moveLR) {
                childnode.addComponent('moveLR')
                if (obs.align === 'left' || obs.align === 'float_left')
                    childnode.getComponent('moveLR').speedScale = obs.moveLR.speedScale
                else childnode.getComponent('moveLR').speedScale = -obs.moveLR.speedScale
            }
            if (obs.disappear) {
                childnode.addComponent('disappear')
                childnode.getComponent('disappear').beginDis = obs.disappear.distance
            }
        }

        this.totalDistance = currentPosY
    },

    drawEndlessLevel: function(){
        let level = this.levelSetup.constructEndless()

        this.drawLevelContent(level)
    },

    drawChallengeLevel: function(levelNum) {
        let ls = levelNum.split('_')
        const levelContent = this.levelSetup.levels["Normal_" + ls[1] + '_' + ls[2]]
        this.drawLevelContent(levelContent)
    },

    drawNormalLevel: function (levelNum) {
        //从level中加载关卡内容
        const levelContent = this.levelSetup.levels[levelNum]
        this.drawLevelContent(levelContent)
    },

    preSetValueLoad: function () {
        this.inputInfo = cc.find('Controller Node').getComponent('controller').preSetInfo
        this.rewindTime = this.inputInfo.gameTime.rewind
        this.spacing = this.inputInfo.obstaclesInfo.spacing
        this.speed = this.inputInfo.obstaclesInfo.speed
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //游戏状态可以是 off,on,pause,rewind
        this.status = "off"

        //预加载
        this.preSetValueLoad()

        this.levelSetup = require('levels')

        this.coverDistance = 0
        this.originY = this.node.y
        this.currentScore = 0
    },

    start() {
        //计算单位分数
        this.unitScore = this.speed / this.inputInfo.obstaclesInfo.speed
    },

    update(dt) {
        switch (this.status) {
            case "on":
                //游戏正常运行
                if (this.coverDistance > this.totalDistance + 1.5 * this.node.height) {
                    //更改为下一关,发送下一关事件
                    console.log('过关！')

                    this.status = 'off'
                    this.coverDistance = 0
                    this.node.y = this.originY
                    this.node.dispatchEvent(new cc.Event.EventCustom('LevelPassed', true))
                } else {
                    this.node.y -= this.speed
                    this.coverDistance += this.speed
                    this.currentScore += this.unitScore
                }
                break
            case "off":
                break
            case "pause":
                break
            case "rewind":
                //死亡重开
                if (this.node.y < this.originY) {
                    //继续
                    this.node.y += this.coverDistance / this.rewindTime
                    this.node.rewindScale = this.coverDistance / this.rewindTime / this.speed
                } else {
                    this.status = 'on'
                    this.currentScore -= this.coverDistance / this.inputInfo.obstaclesInfo.speed
                    this.coverDistance = 0

                    //恢复有动画节点在障碍物画布中的位置和旋转信息
                    for (let child of this.node.children) {
                        child.x = child.originX
                        child.y = child.originY
                        child.rotation = 0
                        child.opacity = 250
                    }
                }
                break
        }
    },
});