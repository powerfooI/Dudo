(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Game/gamePreSet.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5b10cDfrphNsa2E0DHxFB70', 'gamePreSet', __filename);
// scripts/gamePreSet.js

"use strict";

//此文件中

//固定一个speed,radius
//spaceing = 2 * rauius
//angularVelocity = Math.PI * speed / spacing

var circleInfo = {
    radius: 220,
    angularVelocity: 0.057,
    centerY: -400
};

var obstaclesInfo = {
    spacing: 440,
    speed: 8
};

var animationInfo = {

    //rotate_L,R属性
    moveYDebt: 40,

    //SideRotate_L,R属性
    posXDebt: 30,

    //消失动画的属性
    disappearDefaultSpeed: 4
};

var gameTime = {
    deadPause: 30, //Frame
    passPause: 60,
    rewind: 60,
    revolve: 60,
    refreshScore: 40
};

var levelNums = [5, 6, 5, 6, 6, 6, 9];

var levelSpeed = {
    Normal_1_1: 0.7,
    Normal_1_2: 0.7,
    Default: [0.9, 1.0, 1.2, 1.5, 1.5, 1.5, 1.7, 1.7, 1.7]
};

module.exports = {
    circleInfo: circleInfo,
    gameTime: gameTime,
    obstaclesInfo: obstaclesInfo,
    animationInfo: animationInfo,
    levelNums: levelNums,
    levelSpeed: levelSpeed
};

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
        //# sourceMappingURL=gamePreSet.js.map
        