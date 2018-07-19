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
        this.registerEventHandler()
        // cc.log(this.node.getChildByName('content').getChildByName('content'))
    },

    init:function(){

    },

    registerEventHandler:function(){
        this.node.on('touchstart',function(event){
            event.stopPropagation()
        },this)

        this.node.on('touchend',function(event){
            event.stopPropagation()
        },this)

        this.node.on('touchmove',function(event){
            if(this.node.y+event.getDelta().y>=this.minY && this.node.y+event.getDelta().y<=this.maxY){
                this.node.y += event.getDelta().y
            }
            else if(this.node.y+event.getDelta().y < this.minY){
                this.node.y = this.minY
            }
            else if(this.node.y+event.getDelta().y > this.maxY){
                this.node.y = this.maxY
            }
            event.stopPropagation()
        },this)
    },

    start () {
    },

    // update (dt) {},
});
