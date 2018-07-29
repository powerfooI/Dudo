//障碍左右横移组件
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.speedScale = 1 //为1，考虑从左往右的情况，从右往左改为-1
    },

    start() {
        this.animationMoved = 0

        let inputInfo = cc.find('Controller Node').getComponent('controller').preSetInfo
        this.parentSpeed = this.node.parent.getComponent('obstacles').speed
        this.centerY = inputInfo.circleInfo.centerY

        this.Horwidth = Math.abs(this.node.parent.width - 2 * this.node.x)

        this.moveLRDis = 3.5 * this.Horwidth / Math.abs(this.speedScale)
    },

    update(dt) {
        //到旋转中心的距离
        let dis = this.node.parent.y + this.node.y - this.centerY

        //距离旋转中心this.moveLRDis的距离开始这个动作
        switch (this.node.parent.getComponent('obstacles').status) {
            case "on":
                if (dis < this.moveLRDis) {
                    if (this.animationMoved < 8 * this.Horwidth) {
                        let num = parseInt(this.animationMoved / this.Horwidth)
                        if (num === 0 || num === 4)
                            this.node.x += this.parentSpeed * this.speedScale
                        else if (num === 2 || num === 6)
                            this.node.x -= this.parentSpeed * this.speedScale

                        this.animationMoved += Math.abs(this.parentSpeed * this.speedScale)
                    }
                }
                break
            case "rewind":
                if (this.animationMoved > 0) {
                    //需要移动
                    let num = parseInt(this.animationMoved / this.Horwidth)
                    if (num === 0 || num === 4)
                        this.node.x -= this.parentSpeed * this.speedScale * this.node.parent.rewindScale
                    else if (num === 2 || num === 6)
                        this.node.x += this.parentSpeed * this.speedScale * this.node.parent.rewindScale

                    this.animationMoved -= Math.abs(this.parentSpeed * this.speedScale * this.node.parent.rewindScale)
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