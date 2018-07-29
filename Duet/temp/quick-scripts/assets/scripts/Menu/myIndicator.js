(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Menu/myIndicator.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5b675mhg81DNKbwAZkWzQqL', 'myIndicator', __filename);
// scripts/myIndicator.js

"use strict";

//选择页指示器组件
cc.Class({
    extends: cc.Component,

    properties: {
        currentIndex: 0,
        lastIndex: 0,
        underlinePrefab: {
            default: null,
            type: cc.Prefab
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.labels = this.node.children;
        this.pageView = this.node.parent._components[0];
        this.refresh();
    },


    //在当前页面标签下面加入红色下划线，并降低该标签的透明度
    refresh: function refresh() {
        for (var i = 0; i < this.labels.length; ++i) {
            if (i === this.currentIndex) {
                this.labels[i].opacity = 255;
                var childnode = cc.instantiate(this.underlinePrefab);
                this.labels[i].addChild(childnode);
                childnode.width = 133;
                childnode.height = 5;
                childnode.setPosition(cc.p(0, -30));
            } else {
                this.labels[i].opacity = 128;
                if (this.labels[i].childrenCount > 0) {
                    this.labels[i].children[0].destroy();
                }
            }
        }
    },

    //获取pageview组件当前所在的页面下标
    nowIndex: function nowIndex() {
        return this.pageView.getCurrentPageIndex();
    },

    //实时刷新指示器的显示
    update: function update(dt) {
        this.currentIndex = this.nowIndex();
        if (this.currentIndex != this.lastIndex) {
            this.refresh();
            this.lastIndex = this.currentIndex;
        }
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
        //# sourceMappingURL=myIndicator.js.map
        