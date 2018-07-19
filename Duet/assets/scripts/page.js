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
        bnTemps:{
            default:[],
            type:[cc.Prefab]
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.init()
        this.registerEventHandler()

    },

    init:function(){
        //初始化页面上下滑动的极限Y值
        this.minY = this.node.parent.height/2 - this.node.height/2
        this.maxY = this.minY + this.node.height - this.node.parent.height
        this.node.y = this.minY
    },

    registerEventHandler:function(){
        //触屏开始和结束事件，不能传播到父节点
        this.node.on('touchstart',function(event){
            event.stopPropagation()
        },this)

        this.node.on('touchend',function(event){
            event.stopPropagation()
        },this)

        //移动触点滑动的距离
        this.node.on('touchmove',function(event){
            if(this.node.y+event.getDelta().y>=this.minY && this.node.y+event.getDelta().y<=this.maxY){
                this.node.y += event.getDelta().y
            }
            else if(this.node.y+event.getDelta().y < this.minY){
                this.node.y = this.minY
            }
            else if(this.node.y+event.getDelta().y > this.maxY){
                this.node.y = this.maxY
            }
            event.stopPropagation()
        },this)
    },

    setButtons:function(chapterNum,buttonNum){
        //chapterNum章节数，buttonNum按键数(最大不超过9)

        let posY = 950
        switch(chapterNum){
            case 1:
                posY = 850
                break
            case 2:
                posY = 400
                break
            case 3:
                posY = -50
                break
            case 4:
                posY = -500
                break
            case 5:
                posY = -950
                break
            case 6:
                posY = -1400
                break
            default:
                cc.log(`章节数错误！问题出现在${this.node.name}的${this.name}组件里！`)
                return
                break
        }

        if(buttonNum<1){
            cc.log(`按键数不能少于1个！问题出现在${this.node.name}的${this.name}组件里！`)
            return
        }

        let posX = -150
        for(let i = 1;i<=buttonNum;++i){
            let newBn = cc.instantiate(this.bnTemps[i])
            this.node.addChild(newBn)
            newBn.name = `${chapterNum}_${i}`
            newBn.setPosition(cc.p(posX,posY))
            if(i%3===0){
                posX = -150
                posY -= 120 //每个章节按键群的纵向间隔
            }
            else posX += 150
        }
    },

    start () {
        this.setButtons(1,9)
        this.setButtons(2,7)
        this.setButtons(3,2)
    },

    // update (dt) {},
});
