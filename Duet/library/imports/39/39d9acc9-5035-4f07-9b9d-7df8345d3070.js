"use strict";
cc._RF.push(module, '39d9azJUDVPB5udffg0XTBw', 'returnButton');
// scripts/returnButton.js

'use strict';

//返回主菜单按钮的组件
cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        //点击之后直接切换到startmenu场景
        this.node.on('click', function (event) {
            cc.director.loadScene('startmenu');
        }, this);
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();