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

    onLoad () {
        this.init()
        this.registerClickEvent()
    },

    start () {

    },

    init:function(){
        
    },

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
