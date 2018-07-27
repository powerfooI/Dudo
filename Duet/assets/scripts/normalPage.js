//故事页面和挑战页面的布局组件
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.page = this.node.getComponent('page')
    },

    start () {
        this.page.setButtons(1,5)
        this.page.setButtons(2,6)
        this.page.setButtons(3,5)
        this.page.setButtons(4,6)
        this.page.setButtons(5,6)
        this.page.setButtons(6,6)
        this.page.setButtons(7,9)
    },

    // update (dt) {},
});
