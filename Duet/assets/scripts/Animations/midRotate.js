//中部障碍旋转组件
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // this.rotateDirection = 1 //左转为1
    },

    start() {

        this.animationMoved = 0

        let inputInfo = cc.find('Controller Node').getComponent('controller').preSetInfo

        this.parentSpeed = this.node.parent.getComponent('obstacles').speed
        this.centerY = inputInfo.circleInfo.centerY

        this.moveY = this.node.width - inputInfo.animationInfo.moveYDebt
        this.rotateSpeed = 180 * this.parentSpeed / this.moveY

        this.beginRotateDis = this.moveY * 3
    },

    update(dt) {
        //到旋转中心的距离
        let dis = this.node.parent.y + this.node.y - this.centerY

        //距离旋转中心this.moveLRDis的距离开始这个动作
        switch (this.node.parent.getComponent('obstacles').status) {
            case "on":
                if (dis < this.beginRotateDis) {
                    this.node.rotation -= this.rotateSpeed * this.node.rotateDirection
                    this.animationMoved += Math.abs(this.rotateSpeed)
                }
                break
            case "rewind":
                if (this.animationMoved > 0) {
                    this.node.rotation += this.rotateSpeed * this.node.parent.rewindScale * this.node.rotateDirection
                    this.animationMoved -= Math.abs(this.rotateSpeed * this.node.parent.rewindScale)
                }
                else if (this.animationMoved < 0) this.animationMoved = 0
                break
            case "off":
            case "pause":
            default:
                break
        }
    },
});