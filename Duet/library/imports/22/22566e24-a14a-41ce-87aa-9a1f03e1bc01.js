"use strict";
cc._RF.push(module, '225664koUpBzoeqmh8D4bwB', 'moveDown');
// scripts/Animations/moveDown.js

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
        this.beginDis = 1;
        this.speedScale = 1;
    },
    start: function start() {
        this.animationMoved = 0;

        var inputInfo = cc.find('Controller Node').getComponent('controller').preSetInfo;

        // this.parentSpeed = inputInfo.obstaclesInfo.speed
        this.parentSpeed = this.node.parent.getComponent('obstacles').speed;
        this.spacing = inputInfo.obstaclesInfo.spacing;

        this.centerY = inputInfo.circleInfo.centerY;
        // this.moveDownDis = inputInfo.animationInfo.moveDownDis
        // this.speedScale = inputInfo.animationInfo.speedScaleDown
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