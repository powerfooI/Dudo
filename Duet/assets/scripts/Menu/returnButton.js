//返回主菜单按钮的组件
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //点击之后直接切换到startmenu场景
        this.node.on('click',function(event){
            cc.director.loadScene('startmenu')
        },this)
    },

    start () {

    },

    // update (dt) {},
});
