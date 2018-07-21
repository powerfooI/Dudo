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
        //此距离为预设的开始加速下移时，障碍距离中心的y轴距离
        // preSetDistanceDown: 333,
    },

    // LIFE-CYCLE CALLBACKS:

    //说明：Levels中定义的样子是初始时，即没有做任何运动的样子！！！

    onLoad() {
        // this.status = 'on'
        // this.coee = 0.8
        // this.diameter = this.node.parent.getComponent('obstacles').spacing
        // this.parentSpeed = this.node.parent.getComponent('obstacles').speed
        // this.halfHeight = this.node.parent.height / 2

        // this.moveDownSpeed = this.diameter * this.parentSpeed / (this.coee * this.preSetDistanceDown)
        // this.middleRotationSpeed = (360 * this.parentSpeed) / this.halfHeight
        // console.log(this.middleRotationSpeed)
        // console.log(speed)
        // console.log(this.node.animation)//.parent.y)
        // console.log(this.animation)
        // if (this.animation)
    },

    start() {
        // console.log(this.node.animation)

        //有动画效果
        if (this.node.animation) {
            this.node.originX = this.node.x
            this.node.originY = this.node.y
            this.node.animationMoved = 0

            let inputInfo = cc.find('Controller Node').getComponent('controller').preSetInfo

            this.parentSpeed = inputInfo.obstaclesInfo.speed

            //从 距离旋转点中心的距离 到 整个相框中心距离的 增益
            //+ inputInfo.circleInfo.centerY + inputInfo.circleInfo.radius

            //计算动画的信息
            switch (this.node.animation) {
                case "moveDown":
                    this.spacing = inputInfo.obstaclesInfo.spacing
                    this.moveDownDis = inputInfo.animationInfo.moveDownDis
                    this.speedScale = inputInfo.animationInfo.speedScaleDown
                    break
                case "moveLR":
                case "moveRL":
                    this.parentWidth = this.node.parent.width
                    this.halfHorlength = Math.abs(this.parentWidth - 2 * this.node.x)
                    this.moveLRDis = 2 * this.halfHorlength / inputInfo.animationInfo.speedScaleLR + inputInfo.circleInfo.centerY + inputInfo.circleInfo.radius
                    this.speedScale = inputInfo.animationInfo.speedScaleLR
                    break
                case "rotate_L":
                case "rotate_R":
                    this.moveY = this.node.width// - inputInfo.animationInfo.moveYDebt
                    this.rotateSpeed = 180 * this.parentSpeed / this.moveY
                    this.rewindScale = inputInfo.animationInfo.rewindScale
                    this.beginRotateDis = this.moveY * (3 + 1 / 2) + inputInfo.circleInfo.centerY// + inputInfo.circleInfo.radius
                    break
                case "SideRotate_L":
                case "SideRotate_R":
                    this.beginRotateDis = 3 * inputInfo.obstaclesInfo.spacing + inputInfo.circleInfo.centerY + inputInfo.circleInfo.radius
                    this.rotateSpeed = 180 * this.parentSpeed / (3 * inputInfo.obstaclesInfo.spacing)
                    this.rewindScale = inputInfo.animationInfo.rewindScale
                    break
                case "disappear":
                    this.disappearDis = inputInfo.animationInfo.disappearDis
                    this.speedDisappear = inputInfo.animationInfo.speedDisappear
                    break
            }

            if (this.node.animation === 'moveRL') this.speedScale = -this.speedScale
            else if (this.node.animation === 'rotate_R') this.rotateSpeed = -this.rotateSpeed
            else if (this.node.animation === 'SideRotate_L'){
                this.node.x -= inputInfo.animationInfo.posXDebt
                this.node.originX = this.node.x
            }
            else if (this.node.animation === 'SideRotate_R') {
                this.node.x += inputInfo.animationInfo.posXDebt
                this.node.originX = this.node.x
                this.rotateSpeed = -this.rotateSpeed
            }
        }
    },

    updateAnimation: function (dis, rewind) {
        switch (this.node.animation) {
            case "moveDown":
                if (dis < this.moveDownDis) {
                    if (rewind && this.node.animationMoved > 0) {
                        this.node.y += this.parentSpeed * this.speedScale
                        this.node.animationMoved -= this.parentSpeed * this.speedScale
                    } else if (!rewind && this.node.animationMoved < this.spacing) {
                        // console.log(this.animationMoved)
                        this.node.y -= this.parentSpeed * this.speedScale
                        this.node.animationMoved += this.parentSpeed * this.speedScale
                    }
                }
                break
            case "moveLR":
            case "moveRL":
                if (dis < this.moveLRDis) {
                    if (rewind && this.node.animationMoved > 0) {
                        //需要移动
                        if (this.node.animationMoved > this.halfHorlength) //右
                            this.node.x += this.parentSpeed * this.speedScale
                        else this.node.x -= this.parentSpeed * this.speedScale

                        this.node.animationMoved -= Math.abs(this.parentSpeed * this.speedScale)
                    } else if (!rewind && this.node.animationMoved < 2 * this.halfHorlength) {
                        //需要移动
                        if (this.node.animationMoved > this.halfHorlength) //左
                            this.node.x -= this.parentSpeed * this.speedScale
                        else this.node.x += this.parentSpeed * this.speedScale

                        this.node.animationMoved += Math.abs(this.parentSpeed * this.speedScale)
                    }
                }
                break
            case "rotate_L":
            case "rotate_R":
                console.log(this.node.parent.y + this.node.y - (-400))
                if (dis < this.beginRotateDis) {
                    if (rewind && this.node.animationMoved > 0) {
                        this.node.rotation += this.rotateSpeed * this.rewindScale
                        this.node.animationMoved -= Math.abs(this.rotateSpeed)
                    } else if (!rewind) {
                        this.node.rotation -= this.rotateSpeed
                        this.node.animationMoved += Math.abs(this.rotateSpeed)
                    }
                }
                break
            case "SideRotate_L":
            case "SideRotate_R":
                if (dis < this.beginRotateDis) {
                    if (rewind && this.node.animationMoved > 0) {
                        this.node.rotation += this.rotateSpeed * this.rewindScale
                        this.node.animationMoved -= Math.abs(this.rotateSpeed)
                    } else if (!rewind) {
                        this.node.rotation -= this.rotateSpeed
                        this.node.animationMoved += Math.abs(this.rotateSpeed)
                    }
                }
                break
            case "disappear":
                if (dis < this.disappearDis) {
                    if (rewind && this.node.animationMoved > 0) {
                        this.node.opacity += this.speedDisappear
                        this.node.animationMoved -= this.speedDisappear
                    } else if (!rewind && this.node.opacity - this.speedDisappear >= 0 && this.node.animationMoved < 255) {
                        // console.log(this.node.opacity)
                        this.node.opacity -= this.speedDisappear
                        this.node.animationMoved += this.speedDisappear
                    }
                }
                break
        }
    },

    update(dt) {
        //无动画障碍直接过
        if (!this.node.animation) return
        let dis = this.node.parent.y + this.node.y //和中心的距离
        // 障碍还没有出现，直接过
        // if (dis > (this.node.parent.height + this.node.width + this.node.height) / 2 ) return
        // 障碍已经过了，直接过
        // if (dis < -(this.node.parent.height + this.node.width + this.node.height) / 2) return

        //障碍物在屏幕显示区域或有一部分出现在显示区域
        switch (this.node.parent.getComponent('obstacles').status) {
            case "on":
                this.updateAnimation(dis, false)
                break
            case "rewind":
                this.updateAnimation(dis, true)
                break
            case "off":
            case "pause":
            default:
                break
        }
        //障碍有动画且在视线内
        // switch (this.node.animation) {
        //     case "moveDown":
        //         if (dis < this.preSetDistanceDown && dis > this.preSetDistanceDown - this.diameter) {
        //             // console.log('move Down this one')
        //             if (this.node.parent.getComponent('obstacles').status ===  'rewind')
        //                 this.node.y += this.moveDownSpeed
        //             else if (this.node.parent.getComponent('obstacles').status ===  'on')
        //                 this.node.y -= this.moveDownSpeed
        //         }
        //         break
        //     case "moveLR":
        //         console.log('move LR this one')
        //         break
        //     case "rotate_L":
        //         if (dis < this.halfHeight + this.node.height/2 && dis > -(this.halfHeight))
        //         this.node.rotation += this.middleRotationSpeed
        //         console.log('rotate_L')
        //         break
        //     case "rotate_R":
        //         this.node.rotation -= this.middleRotationSpeed
        //         console.log('rotate_R')
        //         break
        //     default:
        //         console.log('No such animation: ' + this.node.animation)
        //         break
        // }
    },
});