//无尽模式页面的布局
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.page = this.node.getComponent('page')
    },

    start () {
        this.page.setButtons(1,1)
    },

    // update (dt) {},
});
