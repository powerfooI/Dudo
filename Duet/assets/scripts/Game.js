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
        //中心圆的引用
        circle: {
            default: null,
            type: cc.Node,
        },
        //障碍物的引用
        obstacles: {
            default: null,
            type: cc.Node,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //加载控制器
        this.controller = cc.find('Controller Node').getComponent('controller')

        //预设值
        this.deadPauseTime = this.controller.preSetInfo.gameTime.deadPause
        this.passPauseTime = this.controller.preSetInfo.gameTime.passPause

        // this.circle.getComponent("circle").radius = this.radius
        // this.obstacles.getComponent("obstacles").spacing = 2 * this.radius
        
        this.gameStatus = "on"
        this.frameMark = 0
    },

    //start在update前，其他组件onload之后，可以开始加载障碍
    start() {
        //加载第一个关卡
        this.obstacles.getComponent("obstacles").drawLevel(this.controller.currentLevel)
        this.obstacles.getComponent("obstacles").status = 'on'
        this.circle.getComponent("circle").status = 'on'

        // this.loadControllerLevel()

        //加载下一关事件
        this.node.on('LevelPassed', function (event) {
            //过关之后有一段时间暂停
            this.gameStatus = 'passPause'
            this.obstacles.getComponent("obstacles").status = 'off'
            this.circle.getComponent("circle").status = 'pause'
            this.frameMark = 0

            //加载下一关
            this.controller.currentLevel = 'Normal_1_1'
            this.obstacles.getComponent("obstacles").drawLevel(this.controller.currentLevel)

            //设置revolve
            //计算要旋转的角度
            let circle = this.circle.getComponent("circle")
            circle.frameMark = 0
            let tempAngle = (circle.angle % Math.PI)
            if (tempAngle > Math.PI / 2) circle.revolveAnlge = tempAngle - Math.PI
            else if (tempAngle < -Math.PI / 2) circle.revolveAnlge = tempAngle + Math.PI
            else circle.revolveAnlge = tempAngle

        }, this)

        //撞击死亡事件
        this.node.on('CollisionDead', function (event) {
            //撞击之后的事件
            if (this.gameStatus === 'on') {
                //游戏正在运行,发生碰撞,暂停
                this.gameStatus = 'deadPause'
                this.obstacles.getComponent("obstacles").status = 'pause'
                this.circle.getComponent("circle").status = 'pause'
                this.frameMark = 0

                //计算要旋转的角度
                let circle = this.circle.getComponent("circle")
                circle.frameMark = 0
                let tempAngle = (circle.angle % Math.PI)
                if (tempAngle > Math.PI / 2) circle.rewindAnlge = tempAngle - Math.PI
                else if (tempAngle < -Math.PI / 2) circle.rewindAnlge = tempAngle + Math.PI
                else circle.rewindAnlge = tempAngle
            }
        }, this)

        //撞击复活事件
        this.node.on('CollisionRelive', function (event) {
            this.gameStatus = 'on'
        }, this)

        //开始下一关事件
        this.node.on('NewLevelStart', function (event) {
            this.gameStatus = 'on'
            this.obstacles.getComponent("obstacles").status = 'on'
        }, this)
    },

    update(dt) {
        switch (this.gameStatus) {
            case "deadPause":
                if (this.frameMark >= this.deadPauseTime) {
                    this.gameStatus = 'rewind'

                    this.obstacles.getComponent("obstacles").status = 'rewind'
                    this.circle.getComponent("circle").status = 'rewind'

                    // console.log(this.obstacles)
                    // let obst = this.obstacles.getComponent("obstacles")

                } else this.frameMark++
                    break
            case "passPause":
                if (this.frameMark >= this.passPauseTime) {
                    this.gameStatus = 'on'

                    this.obstacles.getComponent("obstacles").status = 'pause'
                    this.circle.getComponent("circle").status = 'revolve'
                } else this.frameMark++
                    break
            default:
                break
        }
    },
});