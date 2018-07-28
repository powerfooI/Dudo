"use strict";
cc._RF.push(module, 'e8b4eChEaJIAabA+r+Vsw/I', 'normalPage');
// scripts/normalPage.js

'use strict';

//故事页面和挑战页面的布局组件
cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.page = this.node.getComponent('page');
    },
    start: function start() {
        this.page.setButtons(1, 5);
        this.page.setButtons(2, 6);
        this.page.setButtons(3, 5);
        this.page.setButtons(4, 6);
        this.page.setButtons(5, 6);
        this.page.setButtons(6, 6);
        this.page.setButtons(7, 9);
    }
}

// update (dt) {},
);

cc._RF.pop();