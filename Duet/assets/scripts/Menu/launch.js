
cc.Class({
    extends: cc.Component,

    properties: {
        display: cc.Sprite,
        rankingSwitch:false
    },

    onLoad(){
        this.left = this.display.node.getChildByName('left')
        this.right = this.display.node.getChildByName('right')
        this.shutdown = this.display.node.getChildByName('shutdown')
    },

    start () {
        this.tex = new cc.Texture2D();

        //按键初始化为不可用状态
        this.left.active = false
        this.right.active = false
        this.shutdown.active = false
    },

    //点击排行榜
    onClick () {
        // 发消息给子域
        if(!this.rankingSwitch){
            this.rankingSwitch = true
            wx.postMessage({
                message: 'Show'
            })

            //1秒之后显示按键
            setTimeout(()=>{
                this.showButtons()
            },1000)
        }
    },

    //点击上一页按钮
    onClickLeft:function(){
        wx.postMessage({
            message:'Left'
        })
    },

    //点击下一页按钮
    onClickRight:function(){
        wx.postMessage({
            message:'Right'
        })
    },

    //点击关闭按钮
    onClickShutDown:function(){
        wx.postMessage({
            message:'Hide'
        })
        this.hideButtons()
        this.rankingSwitch = false
    },

    //隐藏上一页下一页和关闭按钮
    hideButtons:function(){
        this.right.active = false
        this.shutdown.active = false
        this.left.active = false
        this.right.visible = false
        this.shutdown.visible = false
        this.left.visible = false
    },

    //显示上一页下一页和关闭按钮
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
