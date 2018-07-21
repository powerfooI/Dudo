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

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //开启碰撞检测
        let manager = cc.director.getCollisionManager()
        manager.enabled = true
        // manager.enabledDebugDraw = true
        // manager.enabledDrawBoundingBox = true
    },

    onCollisionEnter: function (other, self) {
        //撞击后的效果
        
        if (this.node.parent.parent.getComponent('circle').status === 'on') {
            this.node.parent.children[1].opacity = 0
            let particle = this.node.parent.children[0].getComponent(cc.ParticleSystem)
            // cc.info(particle.file)
            // console.log(this.node.parent.name)
            // particle.emitterMode = 1
            // particle.endRadius = 300
            particle.startSize = 20
            particle.endSize = 0
            particle.angleVar = 360
            particle.duration = 0.1
            particle.startColor = particle.startColor.setA(255)
            // particle.speed = 500
            particle.life = 2
            particle.gravity.y = -500
            particle.resetSystem()
            // console.log(particle)
            // particle.angleVar = 360
            // particle.startColor = cc.Color.RED
            // console.log(particle)

            // if (this.node.parent.name === 'Red')
            //     particle.file = 'res/raw-assets/Particle/RedBroken.plist'
            // else if (this.node.parent.name === 'Blue')
            //     particle.file = 'res/raw-assets/Particle/BlueBroken.plist'
            // particle.resetSystem()
        }
        //发送撞击事件
        let deadEvent = new cc.Event.EventCustom('CollisionDead', true)
        this.node.dispatchEvent(deadEvent)

    },

    start() {

    },

    // update (dt) {},
});