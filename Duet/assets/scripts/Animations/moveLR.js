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
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // this.beginDis = 1
        this.speedScale = 1 //为1，考虑从左往右的情况，从右往左改为-1
    },

    start() {
        this.animationMoved = 0

        let inputInfo = cc.find('Controller Node').getComponent('controller').preSetInfo
        // this.parentSpeed = inputInfo.obstaclesInfo.speed
        this.parentSpeed = this.node.parent.getComponent('obstacles').speed
        this.centerY = inputInfo.circleInfo.centerY
        // this.rewindScale = inputInfo.animationInfo.rewindScale

        this.Horwidth = Math.abs(this.node.parent.width - 2 * this.node.x)

        this.moveLRDis = 3.5 * this.Horwidth / Math.abs(this.speedScale)
    },

    update(dt) {
        // console.log(this.speedScale)
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