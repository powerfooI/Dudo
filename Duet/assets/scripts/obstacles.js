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
        speed: 15,
        radius: 190,
        obstaclePrefab: {
            default: null,
            type: cc.Prefab
        },
    },

    drawLevel(levelNum) {
        //如果有 则清除
        // console.log('origin')
        // console.log(this.node.childrenCount)
        for (i in this.node.children)
            this.node.children[i].destroy()
        // console.log('deleted')
        // console.log(this.node.childrenCount)

        const levelContent = this.levelSetup.levels[levelNum]
        const obstacle = this.levelSetup.obstacle
        let currentPosY = 200

        let self = this

        const drawRect = function (obj) {
            const wid = obstacle.Rect[obj.type].width
            const hei = obstacle.Rect[obj.type].height

            let childPosX
            if (obj.align === "left") {
                childPosX = wid / 2
            } else if (obj.align === 'right') {
                childPosX = self.node.width - (wid / 2)
            } else if (obj.align === 'middle') {
                childPosX = self.node.width / 2
            } else {
                cc.info('wrong align: ' + obj.align)
                return
            }

            //添加节点以及精灵
            let childnode = cc.instantiate(self.obstaclePrefab)
            self.node.addChild(childnode)
            childnode.width = wid
            childnode.height = hei
            childnode.setPosition(cc.p(childPosX, currentPosY + hei / 2))

            //设置碰撞
            let col = childnode.getComponents(cc.Collider)[0]
            col.size.width = wid
            col.size.height = hei

            currentPosY += hei
        }

        const drawWhirl = function (obj) {

        }

        for (let obs of levelContent) {
            currentPosY += obs.distanceToPre * 2 * this.radius //在Y位置画
            //根据位置画出障碍物
            if (obs.class === 'Rect')
                drawRect(obs)
            if (obs.class === 'Whirl')
                drawWhirl(obs)
        }

        this.totalDistance = currentPosY
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // cc.log('onload function obstacles')

        this.status = "off", //游戏状态可以是 off,on,pause,rewind

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
                    this.node.y += this.coverDistance / 60
                } else {
                    this.status = 'on'
                    this.coverDistance = 0
                }
                break
        }
    },
});