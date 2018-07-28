"use strict";
cc._RF.push(module, 'ede82k9UMZFgarILNYPltL+', 'endlessPage');
// scripts/endlessPage.js

'use strict';

//无尽模式页面的布局
cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.page = this.node.getComponent('page');
    },
    start: function start() {
        this.page.setButtons(1, 1);
    }
}

// update (dt) {},
);

cc._RF.pop();