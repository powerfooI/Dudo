(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Animations/sideRotate.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'df7e6lardREgI19pgHEc8hX', 'sideRotate', __filename);
// scripts/Animations/sideRotate.js

'use strict';

//障碍在两侧进行旋转
cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        // this.rotateDirection = 1 //向左为1
    },
    start: function start() {
        this.animationMoved = 0;

        var inputInfo = cc.find('Controller Node').getComponent('controller').preSetInfo;

        this.parentSpeed = this.node.parent.getComponent('obstacles').speed;
        this.centerY = inputInfo.circleInfo.centerY;

        this.beginRotateDis = 3 * inputInfo.obstaclesInfo.spacing;
        this.rotateSpeed = 180 * this.parentSpeed / (3 * inputInfo.obstaclesInfo.spacing);
    },
    update: function update(dt) {
        //到旋转中心的距离
        var dis = this.node.parent.y + this.node.y - this.centerY;

        //距离旋转中心this.moveLRDis的距离开始这个动作
        switch (this.node.parent.getComponent('obstacles').status) {
            case "on":
                if (dis < this.beginRotateDis) {
                    this.node.rotation -= this.rotateSpeed * this.node.rotateDirection;
                    this.animationMoved += Math.abs(this.rotateSpeed);
                }
                break;
            case "rewind":
                if (this.animationMoved > 0) {
                    this.node.rotation += this.rotateSpeed * this.node.parent.rewindScale * this.node.rotateDirection;
                    this.animationMoved -= Math.abs(this.rotateSpeed * this.node.parent.rewindScale);
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
        //# sourceMappingURL=sideRotate.js.map
        