(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Animations/disappear.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2b384J7WGNGqriDEngf68N/', 'disappear', __filename);
// scripts/Animations/disappear.js

'use strict';

//障碍消失的组件
cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.beginDis = 1;
    },
    start: function start() {
        this.animationMoved = 0;

        var inputInfo = cc.find('Controller Node').getComponent('controller').preSetInfo;
        this.spacing = inputInfo.obstaclesInfo.spacing;
        this.centerY = inputInfo.circleInfo.centerY;
        this.speedDisappear = inputInfo.animationInfo.disappearDefaultSpeed * this.node.parent.parent.getComponent('game').gamespeed;
    },
    update: function update(dt) {
        //到旋转中心的距离
        var dis = this.node.parent.y + this.node.y - this.centerY;
        //距离旋转中心this.beginDis * this.spacing的距离开始这个动作

        switch (this.node.parent.getComponent('obstacles').status) {
            case "on":
                if (dis < this.beginDis * this.spacing) {
                    //movedown只运动一个spacing
                    if (this.node.opacity - this.speedDisappear >= 0) {
                        // && this.animationMoved < 255) {  
                        this.node.opacity -= this.speedDisappear;
                        this.animationMoved += this.speedDisappear;
                    }
                }
                break;
            case "rewind":
                if (this.animationMoved > 0) {
                    if (this.node.opacity + this.speedDisappear * this.node.parent.rewindScale <= 250) {
                        this.node.opacity += this.speedDisappear * this.node.parent.rewindScale;
                        this.animationMoved -= this.speedDisappear * this.node.parent.rewindScale;
                    } else this.animationMoved = 0;
                } else if (this.animationMoved < 0) this.animationMoved = 0;
                break;
            case "off":
            case "pause":
            default:
                break;
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
        //# sourceMappingURL=disappear.js.map
        