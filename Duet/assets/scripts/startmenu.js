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
        audioInfo:cc.Node,
        angle: 0,
        radius: 180,
        unitAngle: 0.07,
        choicePageSwitch:false,
        touchSwitch:false,
        accAngle:0,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.init()
        this.registerEventHandler()
    },

    start () {
        cc.director.preloadScene("game");
    },

    onClickSettings: function(){
        cc.log(this.choicePage)

    },

    init:function(){
        this.circle = this.node.getChildByName('circle')
        this.red = this.circle.getChildByName('red')
        this.blue = this.circle.getChildByName('blue')
        this.choicePage = this.node.getChildByName('choicePage')

        this.centerY = 100
        this.roLeft = true
        this.roRight = false
        this.red.x = -this.radius
        this.blue.x = this.radius
        this.red.y = this.centerY
        this.blue.y = this.centerY
    },

    onClickStart: function(){
        this.choicePageSwitch = !this.choicePageSwitch
        // cc.director.loadScene("game", function(){
        //     cc.log('the game is started!')
        // })
    },

    registerEventHandler:function() {
        this.node.getChildByName('startBn').on('click',this.onClickStart,this)  
        this.node.getChildByName('settingsBn').on('click',this.onClickSettings,this)

        this.node.on('touchstart',function(event){
            if(this.choicePageSwitch){
                this.choicePageSwitch = false
            }

            if(!this.touchSwitch){
                this.touchSwitch = true
            }
        },this);

        this.node.on('touchend',function(event){
            this.touchSwitch = false
            this.accAngle = 0
        },this);
    },

    update (dt) {
        if(this.accAngle<=0.1 && this.touchSwitch){
            this.accAngle += 0.001
        }

        this.angle += this.unitAngle + this.accAngle

        if(this.choicePageSwitch){
            this.choicePage.x = this.node.width/2 - this.choicePage.width/2
        }
        else{
            this.choicePage.x = this.node.width/2 + this.choicePage.width/2
        }

        let posx = Math.cos(this.angle) * this.radius
        let posy = Math.sin(this.angle) * this.radius
        this.blue.x = posx
        this.blue.y = posy + this.centerY
        this.red.x = -posx
        this.red.y = -posy + this.centerY
    },
});
