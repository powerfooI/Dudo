(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Animations/moveDown.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '225664koUpBzoeqmh8D4bwB', 'moveDown', __filename);
// scripts/Animations/moveDown.js

'use strict';

//障碍向下迅速移动的组件
cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.beginDis = 1;
        this.speedScale = 1;
    },
    start: function start() {
        this.animationMoved = 0;

        var inputInfo = cc.find('Controller Node').getComponent('controller').preSetInfo;

        this.parentSpeed = this.node.parent.getComponent('obstacles').speed;
        this.spacing = inputInfo.obstaclesInfo.spacing;

        this.centerY = inputInfo.circleInfo.centerY;
    },
    update: function update(dt) {

        //到旋转中心的距离
        var dis = this.node.parent.y + this.node.y - this.centerY;
        //距离旋转中心this.beginDis * this.spacing的距离开始这个动作
        switch (this.node.parent.getComponent('obstacles').status) {
            case "on":
                //movedown只运动一个spacing
                if (dis < this.beginDis * this.spacing) {
                    if (this.animationMoved < this.spacing) {
                        this.node.y -= this.parentSpeed * this.speedScale;
                        this.animationMoved += this.parentSpeed * this.speedScale;
                    }
                }
                break;
            case "rewind":
                if (this.animationMoved > 0) {
                    this.node.y += this.parentSpeed * this.speedScale * this.node.parent.rewindScale;
                    this.animationMoved -= this.parentSpeed * this.speedScale * this.node.parent.rewindScale;
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
        //# sourceMappingURL=moveDown.js.map
        