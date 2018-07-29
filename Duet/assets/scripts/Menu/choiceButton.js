//选择页面的按钮组件

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.init()
        this.registerClickEvent()
    },

    start () {

    },

    init:function(){
        
    },
    
    //点击之后发送页面名_章节号_按键号给controller
    registerClickEvent:function(){
        this.node.on('click',function(event){
            let choiceButtonClickEvent = new cc.Event.EventCustom('choiceButtonClickEvent',true)
            choiceButtonClickEvent.setUserData({
                levelName: this.node.parent.name + '_' + this.node.name
            })
            cc.game.dispatchEvent(choiceButtonClickEvent)
        },this)
    },
    // update (dt) {},
});
