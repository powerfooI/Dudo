//障碍向下迅速移动的组件
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.beginDis = 1
        this.speedScale = 1
    },

    start() {
        this.animationMoved = 0

        let inputInfo = cc.find('Controller Node').getComponent('controller').preSetInfo

        this.parentSpeed = this.node.parent.getComponent('obstacles').speed
        this.spacing = inputInfo.obstaclesInfo.spacing

        this.centerY = inputInfo.circleInfo.centerY
    },

    update(dt) {
        
        //到旋转中心的距离
        let dis = this.node.parent.y + this.node.y - this.centerY
        //距离旋转中心this.beginDis * this.spacing的距离开始这个动作
        switch (this.node.parent.getComponent('obstacles').status) {
            case "on":
                //movedown只运动一个spacing
                if (dis < this.beginDis * this.spacing) {
                    if (this.animationMoved < this.spacing) {
                        this.node.y -= this.parentSpeed * this.speedScale
                        this.animationMoved += this.parentSpeed * this.speedScale
                    }
                }
                break
            case "rewind":
                if (this.animationMoved > 0) {
                    this.node.y += this.parentSpeed * this.speedScale * this.node.parent.rewindScale
                    this.animationMoved -= this.parentSpeed * this.speedScale * this.node.parent.rewindScale
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