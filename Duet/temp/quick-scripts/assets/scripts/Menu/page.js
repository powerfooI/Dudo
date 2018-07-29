(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Menu/page.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '36f4a6m67dEIpbfskFH71jE', 'page', __filename);
// scripts/page.js

'use strict';

//选择页面的总组件，使单个页面支持上下滑动
cc.Class({
    extends: cc.Component,

    properties: {
        bnTemps: {
            default: [],
            type: [cc.Prefab]
        },
        tagTemps: {
            default: [],
            type: [cc.Prefab]
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.init();
        this.registerEventHandler();
    },


    init: function init() {
        //初始化页面上下滑动的极限Y值
        this.minY = this.node.parent.height / 2 - this.node.height / 2;
        this.maxY = this.minY + this.node.height - this.node.parent.height;
        this.node.y = this.minY;
    },

    registerEventHandler: function registerEventHandler() {

        //触屏开始和结束事件，不能传播到父节点，否则会让选择页面关闭
        this.node.on('touchstart', function (event) {
            event.stopPropagation();
        }, this);

        this.node.on('touchend', function (event) {
            event.stopPropagation();
        }, this);

        //移动触点滑动的距离
        this.node.on('touchmove', function (event) {
            if (this.node.y + event.getDelta().y >= this.minY && this.node.y + event.getDelta().y <= this.maxY) {
                this.node.y += event.getDelta().y;
            } else if (this.node.y + event.getDelta().y < this.minY) {
                this.node.y = this.minY;
            } else if (this.node.y + event.getDelta().y > this.maxY) {
                this.node.y = this.maxY;
            }
            event.stopPropagation();
        }, this);
    },

    setButtons: function setButtons(chapterNum, buttonNum) {

        //chapterNum章节数，buttonNum按键数(最大不超过9)
        var posY = this.node.height / 2 - 150;

        if (chapterNum >= 1 && chapterNum <= 7) {
            posY -= (chapterNum - 1) * 350;
        } else {
            cc.log('\u7AE0\u8282\u6570\u9519\u8BEF\uFF01\u95EE\u9898\u51FA\u73B0\u5728' + this.node.name + '\u7684' + this.name + '\u7EC4\u4EF6\u91CC\uFF01');
        }

        if (buttonNum < 1) {
            cc.log('\u6309\u952E\u6570\u4E0D\u80FD\u5C11\u4E8E1\u4E2A\uFF01\u95EE\u9898\u51FA\u73B0\u5728' + this.node.name + '\u7684' + this.name + '\u7EC4\u4EF6\u91CC\uFF01');
            return;
        }

        var newTag = cc.instantiate(this.tagTemps[chapterNum - 1]);
        this.node.addChild(newTag);

        newTag.setPosition(cc.p(-150, posY + 100));

        var posX = -150;
        for (var i = 1; i <= buttonNum; ++i) {
            var newBn = cc.instantiate(this.bnTemps[i]);
            this.node.addChild(newBn);
            newBn.name = chapterNum + '_' + i;
            newBn.setPosition(cc.p(posX, posY));
            if (i % 3 === 0) {
                posX = -150;
                posY -= 110; //每行按键群的纵向间隔
            } else posX += 150;
        }
    },

    start: function start() {}
}

// update (dt) {},
);

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
        //# sourceMappingURL=page.js.map
        