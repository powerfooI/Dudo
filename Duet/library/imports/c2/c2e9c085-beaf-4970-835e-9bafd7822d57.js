"use strict";
cc._RF.push(module, 'c2e9cCFvq9JcINem6/Xgi1X', 'controller');
// scripts/controller.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        currentStage: 'startMenu',
        lastStage: "",
        currentLevel: ""
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.preSetInfo = require('gamePreSet');

        cc.game.addPersistRootNode(this.node);
        this.registerChoiceButtonClick();
    },

    onStart: function onStart() {
        cc.director.preloadScene("game");
    },

    registerChoiceButtonClick: function registerChoiceButtonClick() {
        cc.game.on('choiceButtonClickEvent', function (event) {
            this.currentStage = "game";

            this.currentLevel = event.detail.levelName;
            cc.director.loadScene('game');
        }, this);
    }

    // update (dt) {},
});

cc._RF.pop();