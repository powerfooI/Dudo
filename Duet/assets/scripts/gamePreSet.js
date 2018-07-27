//此文件中

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

    //rotate_L,R属性
    moveYDebt: 40,

    //SideRotate_L,R属性
    posXDebt: 30,

    //消失动画的属性
    disappearDefaultSpeed: 4
}

const gameTime = {
    deadPause: 30,//Frame
    passPause: 60,
    rewind: 60,
    revolve: 60,
    refreshScore: 40,
}

const levelNums = [5,6,5,6,6,6,9]

const levelSpeed = {
	Normal_1_1: 0.7,
	Normal_1_2: 0.7,
	Default: [
		0.9, 1.0, 1.2, 1.5, 1.5, 1.5, 1.7, 1.7, 1.7
	]
}


module.exports = {
    circleInfo,
    gameTime,
    obstaclesInfo,
    animationInfo,
    levelNums,
    levelSpeed
}