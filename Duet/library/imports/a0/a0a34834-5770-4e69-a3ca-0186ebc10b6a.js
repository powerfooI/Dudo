"use strict";
cc._RF.push(module, 'a0a34g0V3BOaaPKAYbrwQtq', 'midRotate');
// scripts/Animations/midRotate.js

'use strict';

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        // this.rotateDirection = 1 //左转为1
    },
    start: function start() {

        this.animationMoved = 0;

        var inputInfo = cc.find('Controller Node').getComponent('controller').preSetInfo;

        // this.parentSpeed = inputInfo.obstaclesInfo.speed
        this.parentSpeed = this.node.parent.getComponent('obstacles').speed;
        this.centerY = inputInfo.circleInfo.centerY;

        this.moveY = this.node.width - inputInfo.animationInfo.moveYDebt;
        this.rotateSpeed = 180 * this.parentSpeed / this.moveY;
        // this.rewindScale = inputInfo.animationInfo.rewindScale

        // this.beginRotateDis = this.moveY * (3 + 1 / 2) + this.moveY / 2
        this.beginRotateDis = this.moveY * 3;
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