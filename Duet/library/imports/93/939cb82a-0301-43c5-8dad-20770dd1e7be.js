"use strict";
cc._RF.push(module, '939cbgqAwFDxY2tIHcN0ee+', 'game');
// scripts/game.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        //中心圆的引用
        circle: {
            default: null,
            type: cc.Node
        },
        //障碍物的引用
        obstacles: {
            default: null,
            type: cc.Node
        },
        //提示文字的引用
        scoreHint: {
            default: null,
            type: cc.Node
        },
        lifeHint: {
            default: null,
            type: cc.Node
        },
        passHint: {
            default: null,
            type: cc.Node
        },
        gameEnd: {
            default: null,
            type: cc.Node
        },
        finalScore: {
            default: null,
            type: cc.Node
        }
    },

    //重设粒子效果，即关闭爆炸特效
    resetParticle: function resetParticle(particle) {
        particle.startSize = 60;
        particle.endSize = 0;
        particle.startColor = particle.startColor.setA(20);

        particle.angleVar = 0;
        particle.duration = -1;

        particle.life = 1.2;
        particle.gravity.y = -200;
        particle.resetSystem();
    },

    //计算需要旋转的角度，进行rewind和revolve
    calculateAngle: function calculateAngle(method) {
        var circle = this.circle.getComponent("circle");
        circle.frameMark = 0;
        var tempAngle = circle.angle % Math.PI;

        if (tempAngle > Math.PI / 2) circle[method] = tempAngle - Math.PI;else if (tempAngle < -Math.PI / 2) circle[method] = tempAngle + Math.PI;else circle[method] = tempAngle;
    },

    //关卡速度保存在预设文件中，从中获取游戏速度
    getNormalLevelSpeed: function getNormalLevelSpeed() {
        var level = this.controller.currentLevel.split('_')[2];
        if (this.controller.preSetInfo.levelSpeed[this.controller.currentLevel]) return this.controller.preSetInfo.levelSpeed[this.controller.currentLevel];else {
            return this.controller.preSetInfo.levelSpeed.Default[level - 1];
        }
    },

    //加载下一关，更改目前所在关卡这一值
    loadNextLevel: function loadNextLevel() {
        if (this.controller.currentLevel.split('_')[0] !== 'Endless') {
            //不是endless，计算下一关
            var level = this.controller.currentLevel.split('_');
            var mode = level[0];
            var biglev = Number(level[1]);
            var littlelev = Number(level[2]);

            //还是目前大关的情况
            if (littlelev + 1 <= this.controller.preSetInfo.levelNums[biglev - 1]) {
                this.controller.currentLevel = mode + '_' + biglev.toString() + '_' + (littlelev + 1).toString();
            } else if (biglev < this.controller.preSetInfo.levelNums.length) {
                this.controller.currentLevel = mode + '_' + (biglev + 1).toString() + '_1';
            } else {
                //全部通关
                cc.director.loadScene('startmenu');
            }
            console.log(this.controller.currentLevel);
        }

        this.loadCurrentLevel();
    },

    //加载关卡
    loadCurrentLevel: function loadCurrentLevel() {
        switch (this.controller.currentLevel.split('_')[0]) {
            case "Normal":
                this.scoreHint.active = false;
                this.lifeHint.active = false;
                this.obstacles.getComponent("obstacles").drawNormalLevel(this.controller.currentLevel);
                this.gamespeed = this.getNormalLevelSpeed();
                break;
            case "Endless":
                this.obstacles.getComponent("obstacles").drawEndlessLevel();
                this.gamespeed = 1.5;
                break;
            case "Challenge":
                this.scoreHint.active = false;
                this.lifeHint.active = false;
                this.obstacles.getComponent("obstacles").drawChallengeLevel(this.controller.currentLevel);
                this.gamespeed = 1.7;
                break;
        }

        //更改速度
        this.circle.getComponent("circle").unitAngle = this.gamespeed * this.controller.preSetInfo.circleInfo.angularVelocity;
        this.obstacles.getComponent("obstacles").speed = this.gamespeed * this.controller.preSetInfo.obstaclesInfo.speed;
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        //加载控制器
        this.ctrlNode = cc.find('Controller Node');
        this.controller = this.ctrlNode.getComponent('controller');

        //预设值
        this.deadPauseTime = this.controller.preSetInfo.gameTime.deadPause;
        this.passPauseTime = this.controller.preSetInfo.gameTime.passPause;
        this.refreshScoreTime = this.controller.preSetInfo.gameTime.refreshScore;

        this.passHint.active = false;
        this.gameEnd.active = false;
        this.finalScore.active = false;
        this.gameStatus = "on";
        this.frameMark = 0;
    },


    //start在update前，其他组件onload之后，可以开始加载障碍
    start: function start() {
        this.gamespeed = 1;
        //此处加载关卡，首先判定游戏模式
        this.loadCurrentLevel();

        //判定是否需要生命
        if (this.controller.currentLevel.split('_')[0] === 'Endless') {
            this.currentLife = 3;

            this.lifeHint.children[0].active = false;
            this.lifeHint.children[1].active = false;
            this.lifeHint.children[2].active = false;
        }

        //绑定事件
        //加载下一关事件
        this.node.on('LevelPassed', function (event) {
            //过关之后有一段时间暂停
            this.gameStatus = 'passPause';
            this.obstacles.getComponent("obstacles").status = 'off';
            this.circle.getComponent("circle").status = 'pause';
            this.frameMark = 0;

            //显示过关
            this.passHint.active = true;

            //加载下一关
            this.loadNextLevel();

            //设置revolve
            //计算要旋转的角度
            this.calculateAngle('revolveAnlge');
        }, this);

        //撞击死亡事件
        this.node.on('CollisionDead', function (event) {
            //撞击之后的事件
            if (this.gameStatus === 'on') {

                //在这里添加撞击后死亡的音效（如果有的话）
                this.ctrlNode._components[2].play();

                //如果是无尽模式则需要对生命特判
                if (this.controller.currentLevel.split('_')[0] === 'Endless') {
                    //更新生命
                    this.currentLife--;
                    this.lifeHint.children[this.currentLife].active = true;
                    this.lifeHint.children[this.currentLife + 3].active = false;
                    if (this.currentLife === 0) {
                        var finalScore = parseInt(this.obstacles.getComponent('obstacles').currentScore);
                        this.obstacles.getComponent("obstacles").status = 'pause';
                        this.circle.getComponent("circle").status = 'pause';
                        this.gameEnd.active = true;
                        this.finalScore.active = true;
                        this.finalScore.getComponent(cc.Label).string = "最终得分: " + finalScore.toString();

                        //在这里上传得分，最终得分即为上面的finalScore变量
                        wx.postMessage({
                            message: 'UpdateScore',
                            score: finalScore.toString()
                        });

                        return;
                    }
                }

                //游戏正在运行,发生碰撞,暂停
                this.gameStatus = 'deadPause';
                this.obstacles.getComponent("obstacles").status = 'pause';
                this.circle.getComponent("circle").status = 'pause';
                this.frameMark = 0;

                //设置rewind
                //计算要旋转的角度
                this.calculateAngle('rewindAnlge');
            }
        }, this);

        //撞击复活事件
        this.node.on('CollisionRelive', function (event) {
            this.gameStatus = 'on';
        }, this);

        //开始下一关事件
        this.node.on('NewLevelStart', function (event) {
            this.gameStatus = 'on';
            this.obstacles.getComponent("obstacles").status = 'on';
            this.passHint.active = false;
        }, this);

        //设置状态
        this.obstacles.getComponent("obstacles").status = 'on';
        this.circle.getComponent("circle").status = 'on';
    },
    update: function update(dt) {
        switch (this.gameStatus) {
            case "deadPause":
                if (this.frameMark >= this.deadPauseTime) {
                    this.gameStatus = 'rewind';

                    //在这里添加撞击后死亡后rewind过程的音效（如果有的话）
                    this.ctrlNode._components[3].play();

                    this.obstacles.getComponent("obstacles").status = 'rewind';
                    this.circle.getComponent("circle").status = 'rewind';

                    //重载粒子效果
                    var Red = this.node.children[0].children[0];
                    var Blue = this.node.children[0].children[1];
                    Red.children[1].opacity = 255;
                    Blue.children[1].opacity = 255;

                    this.resetParticle(Red.children[0].getComponent(cc.ParticleSystem));
                    this.resetParticle(Blue.children[0].getComponent(cc.ParticleSystem));
                } else this.frameMark++;
                break;
            case "passPause":
                if (this.frameMark >= this.passPauseTime) {
                    this.gameStatus = 'on';

                    this.obstacles.getComponent("obstacles").status = 'pause';
                    this.circle.getComponent("circle").status = 'revolve';
                } else this.frameMark++;
                break;
            case "on":
                if (this.controller.currentLevel.split('_')[0] === 'Endless') {
                    if (this.frameMark >= this.refreshScoreTime) {
                        this.scoreHint.getComponent(cc.Label).string = parseInt(this.obstacles.getComponent('obstacles').currentScore);
                        this.frameMark = 0;
                    } else this.frameMark++;
                }
                break;
            default:
                break;
        }
    }
});

cc._RF.pop();