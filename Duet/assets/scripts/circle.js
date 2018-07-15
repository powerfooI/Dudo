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
        radius: 190,
        unitAngle: 0.07,
        centerY:-297,
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    resetPostion: function(){
        // console.log(this)
        // console.log(this.node)
        this.red = this.node.children[0]
        this.blue = this.node.children[1]

        //位置设定
        this.red.x = this.node.x - this.radius
        this.blue.x = this.node.x + this.radius
        this.red.y = this.centerY
        this.blue.y = this.centerY
        this.angle = 0
    },

    rotateControl: function(){
        let self = this

        //键盘监听事件
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event){
            switch(event.keyCode) {
                case cc.KEY.a:
                    self.roRight = false;
                    self.roLeft = true;
                    break;
                case cc.KEY.d:
                    self.roLeft = false;
                    self.roRight = true;
                    break;
            }
        });

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function (event){
            switch(event.keyCode) {
                case cc.KEY.a:
                    self.roLeft = false;
                    break;
                case cc.KEY.d:
                    self.roRight = false;
                    break;
            }
        });

        this.node.on('touchstart',function(event){
            if(event.getLocationX() < self.centerX){
                self.roRight = false;
                self.roLeft = true;
            }
            else {
                self.roLeft = false;
                self.roRight = true;
            }
        });

        this.node.on('touchend',function(event){
            if(event.getLocationX() < self.centerX){
                self.roLeft = false;
            }
            else {
                self.roRight = false;
            }
        });
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        console.log('onload function')
        this.resetPostion()
        this.roLeft = false
        this.roRight = false
        this.centerX = this.node.width/2
        this.rotateControl()
    },

    //start函数在onload之后调用
    start () {
        // console.log('start function')
    },

    update (dt) {
        if (this.roLeft){
            this.angle += this.unitAngle
        }
        else if (this.roRight){
            this.angle -= this.unitAngle
        }

        //计算新的位置
        let posx = Math.cos(this.angle) * this.radius
        let posy = Math.sin(this.angle) * this.radius
        this.blue.x = posx
        this.blue.y = posy + this.centerY
        this.red.x = -posx
        this.red.y = -posy + this.centerY
    },
});
