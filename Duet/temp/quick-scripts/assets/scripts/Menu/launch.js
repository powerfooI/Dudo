(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Menu/launch.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ca816jeLYZD4qfw5qbhyUcE', 'launch', __filename);
// scripts/launch.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        display: cc.Sprite
    },

    onLoad: function onLoad() {
        this.left = this.display.node.getChildByName('left');
        this.right = this.display.node.getChildByName('right');
        this.shutdown = this.display.node.getChildByName('shutdown');
    },
    start: function start() {
        this.tex = new cc.Texture2D();

        //按键初始化为不可用状态
        this.left.active = false;
        this.right.active = false;
        this.shutdown.active = false;
    },


    //点击排行榜
    onClick: function onClick() {
        var _this = this;

        // 发消息给子域
        wx.postMessage({
            message: 'Show'
        });

        //1秒之后再显示按键
        setTimeout(function () {
            _this.showButtons();
        }, 1000);
    },


    //点击上一页按钮
    onClickLeft: function onClickLeft() {
        wx.postMessage({
            message: 'Left'
        });
    },

    //点击下一页按钮
    onClickRight: function onClickRight() {
        wx.postMessage({
            message: 'Right'
        });
    },

    //点击关闭按钮
    onClickShutDown: function onClickShutDown() {
        wx.postMessage({
            message: 'Hide'
        });
        this.hideButtons();
    },

    //隐藏上一页下一页和关闭按钮
    hideButtons: function hideButtons() {
        this.right.active = false;
        this.shutdown.active = false;
        this.left.active = false;
        this.right.visible = false;
        this.shutdown.visible = false;
        this.left.visible = false;
    },

    //显示上一页下一页和关闭按钮
    showButtons: function showButtons() {
        this.right.active = true;
        this.shutdown.active = true;
        this.left.active = true;
        this.right.visible = true;
        this.shutdown.visible = true;
        this.left.visible = true;
    },

    //实时刷新画布内容
    _updaetSubDomainCanvas: function _updaetSubDomainCanvas() {
        if (!this.tex) {
            return;
        }
        var sharedCanvas = wx.getOpenDataContext().canvas;
        this.tex.initWithElement(sharedCanvas);
        this.tex.handleLoadedTexture();
        this.display.spriteFrame = new cc.SpriteFrame(this.tex);
    },
    update: function update() {
        this._updaetSubDomainCanvas();
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=launch.js.map
        