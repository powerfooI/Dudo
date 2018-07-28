(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/controller.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c2e9cCFvq9JcINem6/Xgi1X', 'controller', __filename);
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
        //# sourceMappingURL=controller.js.map
        