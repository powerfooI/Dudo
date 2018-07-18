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
        gameStatus: "on"
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.pauseMark = 0
        this.node.on('CollisionDead', function (event) {
            //撞击之后的事件
            if (this.gameStatus === 'on'){
                //游戏正在运行,发生碰撞,暂停
                this.gameStatus = 'pause'
                this.obstacles.getComponent("obstacles").pause = true
                this.circle.getComponent("circle").pause = true
                this.pauseMark = 0

                //计算要旋转的角度
                let circle = this.circle.getComponent("circle")
                circle.rewindMark = 0
                let tempAngle = (circle.angle % Math.PI)
                if (tempAngle > Math.PI / 2) circle.rewindAnlge = tempAngle - Math.PI
                else if (tempAngle < -Math.PI / 2) circle.rewindAnlge = tempAngle + Math.PI
                else circle.rewindAnlge = tempAngle

                // console.log('rewindAnlge: ' + circle.rewindAnlge)
            }
            // if (this.obstacles.getComponent("obstacles").rewind) return
            // this.obstacles.getComponent("obstacles").pause = true
            // this.obstacles.getComponent("obstacles").pauseMark = 0
            // event.stopPropagation();
        }, this)
        this.node.on('CollisionRelive', function(event){
            this.gameStatus = 'on'
        }, this)

    },

    start() {

    },

    update (dt) {
        if (this.gameStatus === 'pause'){
            if (this.pauseMark >= 30){
                this.gameStatus = 'rewind'
                this.obstacles.getComponent("obstacles").pause = false
                this.circle.getComponent("circle").pause = false
                this.obstacles.getComponent("obstacles").rewind = true
                this.circle.getComponent("circle").rewind = true
            }
            else this.pauseMark++
        }
    },
});
