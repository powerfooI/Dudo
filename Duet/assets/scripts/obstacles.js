// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

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

    drawLevel: function (levelNum) {
        // console.log('draw: ' + levelNum)
        //如果有 则清除
        for (i in this.node.children)
            this.node.children[i].destroy()

        //加载关卡内容
        const levelContent = this.levelSetup.levels[levelNum]
        const obstacle = this.levelSetup.obstacle
        let currentPosY = 200 //预设距离，留下200，或者此值在preSet中亦可

        let self = this

        const drawRect = function (obj) {
            const wid = obstacle.Rect[obj.type].width
            const hei = obstacle.Rect[obj.type].height

            let childPosX
            switch (obj.align) {
                case "left":
                    childPosX = wid / 2
                    break
                case "right":
                    childPosX = self.node.width - (wid / 2)
                    break
                case "middle":
                    childPosX = self.node.width / 2
                    break
                case "float_left":
                    childPosX = self.node.width / 4
                    break
                case "float_right":
                    childPosX = self.node.width * 3 / 4
                    break
                case "rightMost":
                    childPosX = self.node.width
                    break
                case "leftMost":
                    childPosX = 0
                    break
                default:
                    console.log('wrong align: ' + obj.align)
                    return
            }

            //添加节点以及精灵
            let childnode = cc.instantiate(self.obstaclePrefab)
            self.node.addChild(childnode)
            childnode.width = wid
            childnode.height = hei
            childnode.setPosition(cc.p(childPosX, currentPosY + hei / 2))

            //添加动画属性
            if (obj.animation) {
                // console.log(obj.animation)
                childnode.animation = obj.animation
            }

            //设置碰撞
            let col = childnode.getComponents(cc.Collider)[0]
            col.size.width = wid
            col.size.height = hei

            // currentPosY += hei
        }

        for (let obs of levelContent) {
            currentPosY += obs.distanceToPre * this.spacing //在Y位置画
            //根据位置画出障碍物
            if (obs.class === 'Rect')
                drawRect(obs)
            if (obs.class === 'Whirl')
                drawWhirl(obs)
        }

        this.totalDistance = currentPosY
    },

    preSetValueLoad: function () {
        let inputInfo = cc.find('Controller Node').getComponent('controller').preSetInfo
        this.rewindTime = inputInfo.gameTime.rewind
        this.spacing = inputInfo.obstaclesInfo.spacing
        this.speed = inputInfo.obstaclesInfo.speed
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //游戏状态可以是 off,on,pause,rewind
        this.status = "off"

        //预加载
        this.preSetValueLoad()

        // this.levelSetup = require('scripts/levels.js')
        this.levelSetup = require('levels')

        this.coverDistance = 0
        this.originY = this.node.y
    },

    start() {

    },

    update(dt) {
        switch (this.status) {
            case "on":
                //游戏正常运行
                if (this.coverDistance > this.totalDistance + this.node.height) {
                    //更改为下一关,发送下一关事件
                    console.log('过关！')

                    this.status = 'off'
                    this.coverDistance = 0
                    this.node.y = this.originY
                    this.node.dispatchEvent(new cc.Event.EventCustom('LevelPassed', true))
                } else {
                    this.node.y -= this.speed
                    this.coverDistance += this.speed
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
                } else {
                    this.status = 'on'
                    this.coverDistance = 0

                    //恢复有动画节点在障碍物画布中的位置和旋转信息
                    for (let child of this.node.children) {
                        if (child.animation) {
                            child.x = child.originX
                            child.y = child.originY
                            child.rotation = 0
                            child.opacity = 250
                            child.animationMoved = 0
                        }
                    }
                }
                break
        }
    },
});