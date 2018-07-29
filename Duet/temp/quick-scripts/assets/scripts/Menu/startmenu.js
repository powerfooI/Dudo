(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Menu/startmenu.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '53662iGrdlAVZzUoJM637Hk', 'startmenu', __filename);
// scripts/Menu/startmenu.js

'use strict';

//主菜单使用的组件
cc.Class({
    extends: cc.Component,

    properties: {
        angle: 0,
        radius: 180,
        unitAngle: 0.07,
        choicePageSwitch: false,
        touchSwitch: false,
        accAngle: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.init();
        this.registerEventHandler();
    },
    start: function start() {
        //预先加载场景game
        cc.director.preloadScene("game");
    },


    //点击排行榜按钮
    onClickRanking: function onClickRanking() {
        this.choicePageSwitch = false;
        this.launch.onClick();
    },

    //点击三角形开始按钮
    onClickStart: function onClickStart() {
        this.launch.onClickShutDown();
        this.choicePageSwitch = true;
    },

    //点击教程按钮
    onClickIntro: function onClickIntro() {
        this.launch.onClickShutDown();
        cc.director.loadScene('introduction', function () {
            cc.director.preloadScene('startmenu');
        });
    },

    //初始化主页面
    init: function init() {
        //绑定一些节点
        this.circle = this.node.getChildByName('circle');
        this.red = this.circle.getChildByName('Red');
        this.blue = this.circle.getChildByName('Blue');
        this.choicePage = this.node.getChildByName('choicePage');
        this.launch = this.node.getComponent('launch');

        //初始化一些属性
        this.centerY = 100;
        this.roLeft = true;
        this.roRight = false;
        this.red.x = -this.radius;
        this.blue.x = this.radius;
        this.red.y = this.centerY;
        this.blue.y = this.centerY;
    },

    //注册一些事件
    registerEventHandler: function registerEventHandler() {
        this.node.getChildByName('startBn').on('click', this.onClickStart, this);
        this.node.getChildByName('rankingBn').on('click', this.onClickRanking, this);
        this.node.getChildByName('introBn').on('click', this.onClickIntro, this);

        this.node.on('touchstart', function (event) {
            //点击选择页外，则隐藏选择页
            if (this.choicePageSwitch) {
                this.choicePageSwitch = false;
            }

            //在首页面按住屏幕，则屏幕中心小球加速旋转
            if (!this.touchSwitch) {
                this.touchSwitch = true;
            }
        }, this);

        this.node.on('touchend', function (event) {
            //结束按压，属性归零
            this.touchSwitch = false;
            this.accAngle = 0;
        }, this);
    },

    update: function update(dt) {
        //小球旋转的一个额外速度
        if (this.accAngle <= 0.1 && this.touchSwitch) {
            this.accAngle += 0.001;
        }

        this.angle += this.unitAngle + this.accAngle;

        //唤出选择页
        if (this.choicePageSwitch) {
            this.choicePage.x = this.node.width / 2 - this.choicePage.width / 2;
        } else {
            this.choicePage.x = this.node.width / 2 + this.choicePage.width / 2;
        }

        //计算两个小球的新位置
        var posx = Math.cos(this.angle) * this.radius;
        var posy = Math.sin(this.angle) * this.radius;
        this.blue.x = posx;
        this.blue.y = posy + this.centerY;
        this.red.x = -posx;
        this.red.y = -posy + this.centerY;
    }
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
        //# sourceMappingURL=startmenu.js.map
        