(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/introductionCircle.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'efa2buhR69AiLOwDxtxrDEZ', 'introductionCircle', __filename);
// scripts/introductionCircle.js

'use strict';

//教程中的两个球及中心圆组件
cc.Class({
    extends: cc.Component,

    properties: {
        roLeft: false,
        roRight: false
    },

    resetPostion: function resetPostion() {
        this.angle = 0;
        this.red = this.node.getChildByName('Red');
        this.blue = this.node.getChildByName('Blue');

        //位置设定
        this.red.x = this.node.x - this.radius;
        this.blue.x = this.node.x + this.radius;
        this.red.y = this.centerY;
        this.blue.y = this.centerY;
        this.angle = 0;
    },

    drawCenterCircle: function drawCenterCircle() {
        //绘制中心的圆
        var ctx = this.addComponent(cc.Graphics);

        ctx.lineWidth = 4;
        ctx.strokeColor = cc.hexToColor('#555555');
        ctx.strokeColor.a = 150;
        ctx.circle(this.node.width / 2, this.node.height / 2 + this.centerY, this.radius);
        ctx.stroke();
    },
    // LIFE-CYCLE CALLBACKS:

    preSetValueLoad: function preSetValueLoad() {
        //加载预设值
        var inputInfo = cc.find('Controller Node').getComponent('controller').preSetInfo;
        this.radius = inputInfo.circleInfo.radius;
        this.unitAngle = inputInfo.circleInfo.angularVelocity;
        this.centerY = inputInfo.circleInfo.centerY;

        this.rewindTime = inputInfo.gameTime.rewind;
        this.revolveTime = inputInfo.gameTime.revolve;
    },

    onLoad: function onLoad() {
        //设置状态
        this.status = "off"; //可以是off, on, pause, rewind

        //加载预设值
        this.preSetValueLoad();

        //重制位置
        this.resetPostion();
        this.roLeft = false;
        this.roRight = false;
        this.absolute_centerX = this.node.width / 2;

        //绘制图形
        this.drawCenterCircle();
    },


    onClickReturn: function onClickReturn() {
        cc.director.loadScene('startmenu');
    },

    updateDotPos: function updateDotPos() {
        var posx = Math.cos(this.angle) * this.radius;
        var posy = Math.sin(this.angle) * this.radius;
        this.blue.x = posx;
        this.blue.y = posy + this.centerY;
        this.red.x = -posx;
        this.red.y = -posy + this.centerY;
    },

    update: function update(dt) {
        if (this.roLeft) {
            this.angle += this.unitAngle;
        } else if (this.roRight) {
            this.angle -= this.unitAngle;
        }
        //计算新的位置
        this.updateDotPos();
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
        //# sourceMappingURL=introductionCircle.js.map
        