
cc.Class({
    extends: cc.Component,

    properties: {
        display: cc.Sprite,
    },

    start () {
        this.tex = new cc.Texture2D();
        this.left = this.display.node.getChildByName('left')
        this.right = this.display.node.getChildByName('right')
        this.shutdown = this.display.node.getChildByName('shutdown')

        this.left.active = false
        this.right.active = false
        this.shutdown.active = false
    },

    onClick () {
        // 发消息给子域
        wx.postMessage({
            message: 'Show'
        })

        //1秒之后再显示按键
        setTimeout(() => {
            this.showButtons()
        }, 1000);

        let kvDataList = []
        kvDataList.push({
            key: "score",
            value: "111"
        });

        wx.setUserCloudStorage({
            KVDataList: kvDataList
        }) 
    },

    onClickHiden:function(){
        wx.postMessage({
            message:'Hide'
        })
        this.hideButtons()
    },

    onClickLeft:function(){
        wx.postMessage({
            message:'Left'
        })
    },

    onClickRight:function(){
        wx.postMessage({
            message:'Right'
        })
    },

    onClickShutDown:function(){
        wx.postMessage({
            message:'Hide'
        })
        this.hideButtons()
    },

    hideButtons:function(){
        this.right.active = false
        this.shutdown.active = false
        this.left.active = false
        this.right.visible = false
        this.shutdown.visible = false
        this.left.visible = false
    },

    showButtons:function(){
        this.right.active = true
        this.shutdown.active = true
        this.left.active = true
        this.right.visible = true
        this.shutdown.visible = true
        this.left.visible = true
    },

    //实时刷新画布内容
    _updaetSubDomainCanvas () {
        if (!this.tex) {
            return;
        }
        let sharedCanvas = wx.getOpenDataContext().canvas;
        this.tex.initWithElement(sharedCanvas);
        this.tex.handleLoadedTexture();
        this.display.spriteFrame = new cc.SpriteFrame(this.tex);
    },

    update () {
        this._updaetSubDomainCanvas()
    }

});
