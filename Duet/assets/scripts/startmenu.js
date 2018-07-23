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
        angle: 0,
        radius: 180,
        unitAngle: 0.07,
        choicePageSwitch:false,
        touchSwitch:false,
        accAngle:0,
        animationSwitch:false
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.init()
        this.registerEventHandler()
    },

    start () {
        //预先加载场景game
        cc.director.preloadScene("game");
    },

    onClickRanking: function(){
        cc.log('这个按钮用来连接开放数据域，勿动！具体操作是将launch脚本放置在Canvas上，看WSY手机上图片的节点配置！')
    },

    onClickStart: function(){
        this.choicePageSwitch = !this.choicePageSwitch

        // cc.director.loadScene("game", function(){
        //     cc.log('the game is started!')
        // })
    },

    onClickIntro:function(){
        cc.director.loadScene('introduction',()=>{
            cc.director.preloadScene('startmenu')
        })
    },
    
    init:function(){
        //绑定一些节点
        this.circle = this.node.getChildByName('circle')
        this.red = this.circle.getChildByName('Red')
        this.blue = this.circle.getChildByName('Blue')
        this.choicePage = this.node.getChildByName('choicePage')
        
        //初始化一些属性
        this.centerY = 100
        this.roLeft = true
        this.roRight = false
        this.red.x = -this.radius
        this.blue.x = this.radius
        this.red.y = this.centerY
        this.blue.y = this.centerY
    },



    registerEventHandler:function() {
        this.node.getChildByName('startBn').on('click',this.onClickStart,this)  
        this.node.getChildByName('rankingBn').on('click',this.onClickRanking,this)
        this.node.getChildByName('introBn').on('click',this.onClickIntro,this)

        this.node.on('touchstart',function(event){
            //点击选择页外，则隐藏选择页
            if(this.choicePageSwitch){
                this.choicePageSwitch = false
            }

            //在首页面按住屏幕，则屏幕中心小球加速旋转
            if(!this.touchSwitch){
                this.touchSwitch = true
            }

        },this);

        this.node.on('touchend',function(event){
            //结束按压，属性归零
            this.touchSwitch = false
            this.accAngle = 0
        },this);
    },

    update (dt) {
        //小球旋转的一个额外速度
        if(this.accAngle<=0.1 && this.touchSwitch){
            this.accAngle += 0.001
        }

        this.angle += this.unitAngle + this.accAngle

        //唤出选择页
        if(this.choicePageSwitch){
            this.choicePage.x = this.node.width/2 - this.choicePage.width/2
        }
        else{
            this.choicePage.x = this.node.width/2 + this.choicePage.width/2
        }

        //计算两个小球的新位置
        let posx = Math.cos(this.angle) * this.radius
        let posy = Math.sin(this.angle) * this.radius
        this.blue.x = posx
        this.blue.y = posy + this.centerY
        this.red.x = -posx
        this.red.y = -posy + this.centerY
    },
});
