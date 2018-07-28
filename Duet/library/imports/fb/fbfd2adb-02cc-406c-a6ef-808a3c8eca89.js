"use strict";
cc._RF.push(module, 'fbfd2rbAsxAbKbvgIo8jsqJ', 'choiceButton');
// scripts/choiceButton.js

'use strict';

//选择页面的按钮组件

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.init();
        this.registerClickEvent();
    },
    start: function start() {},


    init: function init() {},

    //点击之后发送页面名_章节号_按键号给controller
    registerClickEvent: function registerClickEvent() {
        this.node.on('click', function (event) {
            var choiceButtonClickEvent = new cc.Event.EventCustom('choiceButtonClickEvent', true);
            choiceButtonClickEvent.setUserData({
                levelName: this.node.parent.name + '_' + this.node.name
            });
            cc.game.dispatchEvent(choiceButtonClickEvent);
        }, this);
    }
    // update (dt) {},
});

cc._RF.pop();