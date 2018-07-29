cc.Class({
    extends: cc.Component,

    properties: {
        currentStage: 'startMenu',
        lastStage: "",
        currentLevel: "",
    },

    // use this for initialization
    onLoad: function () {
        this.preSetInfo = require('gamePreSet')

        cc.game.addPersistRootNode(this.node)
        this.registerChoiceButtonClick()
    },

    onStart: function () {
        cc.director.preloadScene("game");
    },

    registerChoiceButtonClick: function () {
        cc.game.on('choiceButtonClickEvent', function (event) {
            this.currentStage = "game"

            this.currentLevel = event.detail.levelName
            cc.director.loadScene('game')
        }, this)
    },

    // update (dt) {},
});