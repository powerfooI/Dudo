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
        currentStage: 'startMenu',
        lastStage: "",
        currentLevel: "",
        // gameMode: "",
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
            // cc.log(event.detail)
            // console.log(event.detail.levelName)
            this.currentStage = "game"
            // levelInfo = event.detail.levelName.spilt('_')
            // this.gameMode = levelInfo[0]
            
            this.currentLevel = event.detail.levelName
            cc.director.loadScene('game')
        }, this)
    },

    // update (dt) {},
});