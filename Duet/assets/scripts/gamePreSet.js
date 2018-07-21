//固定一个speed,radius
//spaceing = 2 * rauius
//angularVelocity = Math.PI * speed / spacing

const circleInfo = {
    radius: 220,
    angularVelocity: 0.057,
    centerY: -400,
}

const obstaclesInfo = {
    spacing: 440,
    speed: 8,
}

const animationInfo = {
    //movedown动画的一些属性
    moveDownDis: 500,
    speedScaleDown: 1.5,

    //moveLR动画的一些属性
    // moveLRDis: 500,
    speedScaleLR: 1,

    //spin动画的属性
    // rewindScale: 4,

    //rotate_L,R属性
    moveYDebt: 40,

    //SideRotate_L,R属性
    posXDebt: 30,

    //消失动画的属性
    disappearDis: 500,
    speedDisappear: 5,
}

const gameTime = {
    deadPause: 30,//Frame
    passPause: 60,
    rewind: 60,
    revolve: 60,
}

module.exports = {
    circleInfo,
    gameTime,
    obstaclesInfo,
    animationInfo,
}