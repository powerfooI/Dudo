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
        currentIndex:0,
        lastIndex:0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.labels = this.node.children
        this.pageView = this.node.parent._components[0]
        this.refresh()
    },

    start () {

    },

    refresh:function(){
        for(let i = 0;i<this.labels.length;++i){
            if(i===this.currentIndex){
                this.labels[i].opacity = 255
            }
            else{
                this.labels[i].opacity = 128
            }
        }
    },

    nowIndex:function(){
        return this.pageView.getCurrentPageIndex()
    },

    update (dt) {
        this.currentIndex = this.nowIndex()
        if(this.currentIndex!=this.lastIndex){
            this.refresh()
            this.lastIndex = this.currentIndex
        }
    },
});
