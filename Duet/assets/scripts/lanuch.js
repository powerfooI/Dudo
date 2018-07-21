
cc.Class({
    extends: cc.Component,

    properties: {
        display: cc.Sprite,
        shutDownBnTemp:cc.Prefab
    },

    start () {
        this._isShow = false;
        this.tex = new cc.Texture2D();

        let kvDataList = []
        kvDataList.push({
            key: "score",
            value: "99"
        });

        wx.setUserCloudStorage({
            KVDataList: kvDataList
        }) 
    },

    onClick () {
        this._isShow = !this._isShow;
        // 发消息给子域
        wx.postMessage({
            message: this._isShow ? 'Show' : 'Hide'
        })

        if(this._isShow){
            let shutdownBn = cc.instantiate(this.shutDownBnTemp)
            this.display.node.addChild(shutdownBn)
            shutdownBn.setPosition(cc.p(0,1200))
            let moveTo = cc.moveTo(0.7,0,-360)
            shutdownBn.runAction(moveTo)
            shutdownBn.on('click',this.onClick,this)
        }
        else{
            this.display.node.children[0].destroy()
        }
    },

    _updaetSubDomainCanvas () {
        if (!this.tex) {
            return;
        }
        var openDataContext = wx.getOpenDataContext();
        var sharedCanvas = openDataContext.canvas;
        this.tex.initWithElement(sharedCanvas);
        this.tex.handleLoadedTexture();
        this.display.spriteFrame = new cc.SpriteFrame(this.tex);
    },

    update () {
        this._updaetSubDomainCanvas()
    }

});
