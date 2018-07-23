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
        roLeft : false,
        roRight : false,
    },

    resetPostion: function () {
        this.angle = 0
        this.red = this.node.getChildByName('Red')
        this.blue = this.node.getChildByName('Blue')

        //位置设定
        this.red.x = this.node.x - this.radius
        this.blue.x = this.node.x + this.radius
        this.red.y = this.centerY
        this.blue.y = this.centerY
        this.angle = 0
    },

    drawCenterCircle: function () {
        //绘制中心的圆
        let ctx = this.addComponent(cc.Graphics)

        ctx.lineWidth = 4
        ctx.strokeColor = cc.hexToColor('#555555')
        ctx.strokeColor.a = 150
        ctx.circle(this.node.width / 2, this.node.height / 2 + this.centerY, this.radius)
        ctx.stroke()
    },
    // LIFE-CYCLE CALLBACKS:

    preSetValueLoad: function() {
        //加载预设值
        let inputInfo = cc.find('Controller Node').getComponent('controller').preSetInfo
        this.radius = inputInfo.circleInfo.radius
        this.unitAngle = inputInfo.circleInfo.angularVelocity
        this.centerY = inputInfo.circleInfo.centerY
        // this.deadPauseTime = inputInfo.gameTime.deadPause
        // this.passPause = inputInfo.gameTime.passPause
        this.rewindTime = inputInfo.gameTime.rewind
        this.revolveTime = inputInfo.gameTime.revolve
    },

    onLoad() {
        //设置状态
        this.status = "off" //可以是off, on, pause, rewind
        
        //加载预设值
        this.preSetValueLoad()
        
        //重制位置
        this.resetPostion()
        this.roLeft = false
        this.roRight = false
        this.absolute_centerX = this.node.width / 2

        //绘制图形
        this.drawCenterCircle()
    },

    //start函数在onload之后调用
    start() {

    },

    onClickReturn:function(){
        cc.director.loadScene('startmenu')
    },

    updateDotPos: function () {
        let posx = Math.cos(this.angle) * this.radius
        let posy = Math.sin(this.angle) * this.radius
        this.blue.x = posx
        this.blue.y = posy + this.centerY
        this.red.x = -posx
        this.red.y = -posy + this.centerY
    },

    update(dt) {
        if (this.roLeft) {
            this.angle += this.unitAngle
        } else if (this.roRight) {
            this.angle -= this.unitAngle
        }
        //计算新的位置
        this.updateDotPos()
    },
});