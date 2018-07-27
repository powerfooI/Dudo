//选择页指示器组件
cc.Class({
    extends: cc.Component,

    properties: {
        currentIndex:0,
        lastIndex:0,
        underlinePrefab:{
            default:null,
            type:cc.Prefab,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.labels = this.node.children
        this.pageView = this.node.parent._components[0]
        this.refresh()
    },

    //在当前页面标签下面加入红色下划线，并降低该标签的透明度
    refresh:function(){
        for(let i = 0;i<this.labels.length;++i){
            if(i===this.currentIndex){
                this.labels[i].opacity = 255
                let childnode = cc.instantiate(this.underlinePrefab)
                this.labels[i].addChild(childnode)
                childnode.width = 133 
                childnode.height = 5
                childnode.setPosition(cc.p(0, -30))
            }
            else{
                this.labels[i].opacity = 128
                if(this.labels[i].childrenCount>0){
                    this.labels[i].children[0].destroy()
                }
            }
        }
    },

    //获取pageview组件当前所在的页面下标
    nowIndex:function(){
        return this.pageView.getCurrentPageIndex()
    },

    //实时刷新指示器的显示
    update (dt) {
        this.currentIndex = this.nowIndex()
        if(this.currentIndex!=this.lastIndex){
            this.refresh()
            this.lastIndex = this.currentIndex
        }
    },
});
