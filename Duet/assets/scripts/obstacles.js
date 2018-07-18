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
        speed: 15,
        radius: 190,
        obstaclePrefab: {
            default: null,
            type: cc.Prefab
        },
        rewind: false,
        pause: false,
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
    
    drawLevel(levelNum){
        const levelContent = this.levelSetup.levels[levelNum]
        const obstacle = this.levelSetup.obstacle
        let currentPosY = 200
        
        let self = this

    	const drawRect = function(obj){
    		const wid = obstacle.Rect[obj.type].width
            const hei = obstacle.Rect[obj.type].height

			let childPosX
    		if (obj.align === "left"){
    			childPosX = wid/2
    		}
    		else if (obj.align === 'right'){
    			childPosX = self.node.width - (wid/2)
    		}
    		else if (obj.align === 'middle'){
    			childPosX = self.node.width/2
    		}
    		else {
    			cc.info('wrong align: ' + obj.align)
    			return
            }
            
			//添加节点以及精灵
			let childnode = cc.instantiate(self.obstaclePrefab)
			self.node.addChild(childnode)
			childnode.width = wid
            childnode.height = hei
            childnode.setPosition(cc.p(childPosX, currentPosY + hei/2))
            
			//设置碰撞
			let col = childnode.getComponents(cc.Collider)[0]
			col.size.width = wid
            col.size.height = hei

            currentPosY += hei
    	}

    	const drawWhirl = function(obj){

    	}

        for (let obs of levelContent){
            currentPosY += obs.distanceToPre * 2 * this.radius//在Y位置画
            //根据位置画出障碍物
            if (obs.class === 'Rect')
            	drawRect(obs)
            if (obs.class === 'Whirl')
                drawWhirl(obs)
        }

        this.totalDistance = currentPosY
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.log('onload function obstacles')

        // this.levelSetup = require('scripts/levels.js')
        this.levelSetup = require('levels')

        //根据场景输入获取关卡
        const levelNum = 'level_1_1'
        this.drawLevel(levelNum)

        this.coverDistance = 0
        this.originY = this.node.y
    },

    start () {

    },

    update (dt) {
        if (this.pause){ }
        else if (this.rewind){
            //以某一速度回到上方
            if (this.node.y < this.originY){
                //继续
                this.node.y += this.coverDistance / 60
            }
            else {
                this.rewind = false
                this.coverDistance = 0
            }
        }
        else{
            if (this.coverDistance > this.totalDistance + this.node.height){
                console.log('next one')
            }
            else {
                this.node.y -= this.speed
                this.coverDistance += this.speed
            }
        }
    },
});
