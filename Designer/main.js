/*
class种类： Rect, Whirl
type:
    Rect: strip,BigSquare,MidSquare,shortStrip
    Whirl: type: RotMidStrip, RotSideStrip
align: left, right, middle, float-left, float-right, leftMost, rightMost
distanceToPre: k倍于spacing
moveDown: {
    distance: k倍于spacing
    speedScale: 速度比率
}
moveLR: {
    speedScale: 速度比率
}
disappear: {
    distance: k倍于spacing
    speed: 速度比率
}
*/
const strip = {
    left: {
        class: "Rect",
        type: "strip",
        align: "left",
        distanceToPre: 1,
    },
    right: {
        class: "Rect",
        type: "strip",
        align: "right",
        distanceToPre: 1,
    }
    //moveDown, moveLR 可添加一个
    //disappear可添加
}

const BigSquare = {
    class: "Rect",
    type: "BigSquare",
    align: "middle",
    distanceToPre: 1,
}
//可能消失，设置消失距离和速度

const MidSquare = {
    left: {
        class: "Rect",
        type: "MidSquare",
        align: "float_left",
        distanceToPre: 1,
    },
    right: {
        class: "Rect",
        type: "MidSquare",
        align: "float_right",
        distanceToPre: 1,
    },
    // moveDown, moveLR 可添加一个
    middle: {
        class: "Rect",
        type: "MidSquare",
        align: "middle",
        distanceToPre: 1,
    }
    // disappear可添加
}

const shortStrip = {
    left: {
        class: "Rect",
        type: "shortStrip",
        align: "left",
        distanceToPre: 1,
    },
    middle: {
        class: "Rect",
        type: "shortStrip",
        align: "middle",
        distanceToPre: 1,
    },
    right: {
        class: "Rect",
        type: "shortStrip",
        align: "right",
        distanceToPre: 1,
    }
    //可moveDown
    //disappear可添加
}

const RotMidStrip = {
    left: {
        class: "Whirl",
        type: "RotMidStrip",
        align: "middle",
        distanceToPre: 1,
        rotateDir: "L",
    },
    right: {
        class: "Whirl",
        type: "RotMidStrip",
        align: "middle",
        distanceToPre: 1,
        rotateDir: "R",
    }
    //可消失
}

const RotSideStrip = {
    left: {
        class: "Whirl",
        type: "RotSideStrip",
        align: "leftMost",
        distanceToPre: 1,
        rotateDir: "R",
    },
    right: {
        class: "Whirl",
        type: "RotSideStrip",
        align: "rightMost",
        distanceToPre: 1,
        rotateDir: "L",
    }
    //可消失
}

let level = []
let obs = {}
let currentChoose
let pattern = {}

function add_class(s) {
    switch (s) {
        case "靠左长条":
            obs = Object.assign({}, strip.left)
            break
        case "靠右长条":
            obs = Object.assign({}, strip.right)
            break
        case "中央大方块":
            obs = Object.assign({}, BigSquare)
            break
        case "偏左小方块":
            obs = Object.assign({}, MidSquare.left)
            break
        case "偏右小方块":
            obs = Object.assign({}, MidSquare.right)
            break
        case "中心小方块":
            obs = Object.assign({}, MidSquare.middle)
            break
        case "左边短条":
            obs = Object.assign({}, shortStrip.left)
            break
        case "右边短条":
            obs = Object.assign({}, shortStrip.right)
            break
        case "中央短条":
            obs = Object.assign({}, shortStrip.middle)
            break
        case "中央旋转——左":
            obs = Object.assign({}, RotMidStrip.left)
            break
        case "中央旋转——右":
            obs = Object.assign({}, RotMidStrip.right)
            break
        case "边旋转——左":
            obs = Object.assign({}, RotSideStrip.left)
            break
        case "边旋转——右":
            obs = Object.assign({}, RotSideStrip.right)
            break
    }
}

function chosenAni(a) {
    let s = document.getElementById('inputdistance')
    let t = document.getElementById('inputSpeed')

    switch (a) {
        case "moveDown":
            s.style.display = block;
            t.style.display = block;
            break
        case "moveLR":
            t.style.display = block;
            break
        case "disappear":
            s.style.display = block;
            t.style.display = block;
            break
        default:
            console.log('error: ' + a)
            break
    }
}


function inputAniInfo() {
    let s = Number(document.getElementById("inputdistance").value)
    let t = Number(document.getElementById("inputSpeed").value)

    switch (currentChoose) {
        case "moveDown":
            obs.moveDown.distance = s
            obs.moveDown.speedScale = t
            break
        case "moveLR":
            obs.moveLR = speedScale = t
            break
        case "disappear":
            obs.disappear.distance = s
            obs.disappear.speed = t
            break
    }

}

function clickEvent(e) {
    // console.log(e.parentNode.id)
    // console.log(e.innerHTML)
    let contents = document.getElementById("contents")
    // console.log(contents)

    switch (e.parentNode.id) {
        case "config":
            if (e.innerHTML === '新建') {
                obs = {}
            } else if (e.innerHTML === '完成') {
                console.log(obs)
                level.push(obs)
            } else if (e.innerHTML === '导出') {
                pattern.content = level
                pattern.addToNext = 0
                contents.value = JSON.stringify(pattern, null, "\t")
                // contents.value = level.toString()
                contents.select()
                document.execCommand("Copy")
                console.log(level)
            }
            break
        case "class":
            add_class(e.innerHTML)
            break
        case "distanceToPre":
            obs.distanceToPre = Number(document.getElementById("inputDisToPre").value)
            break
        case "chooseAnimiation":
            currentChoose = e.innerHTML
            chosenAni(currentChoose)
            break
        case "inputSection":
            inputAniInfo()
            break
            // case "input":
            //     // console.log(document.getElementById("inputDis").value)
            //     break
            // case "input_2":
            //     if (currentChoose === 'moveDown') {
            //         obs['moveDown'].distance = Number(document.getElementById("inputdistance").value)
            //         obs['moveDown'].speedScale = Number(document.getElementById("inputSpeed").value)
            //     } else if (currentChoose === 'moveLR') {
            //         obs['moveLR'].speedScale = Number(document.getElementById("inputSpeed").value)
            //     } else {
            //         obs['disappear'].distance = Number(document.getElementById("inputdistance").value)
            //         obs['disappear'].speed = Number(document.getElementById("inputSpeed").value)
            //     }
            //     break
    }
}