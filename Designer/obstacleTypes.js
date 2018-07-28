const strip = {
    left: {
        class: "Rect",
        type: "strip",
        align: "left",
        distanceToPre: 1
    },
    right: {
        class: "Rect",
        type: "strip",
        align: "right",
        distanceToPre: 1
    }
    //moveDown, moveLR 可添加一个
    //disappear可添加
}

const BigSquare = {
    class: "Rect",
    type: "BigSquare",
    align: "middle",
    distanceToPre: 1
}
//可能消失，设置消失距离和速度

const MidSquare = {
    left: {
        class: "Rect",
        type: "MidSquare",
        align: "float_left",
        distanceToPre: 1
    },
    right: {
        class: "Rect",
        type: "MidSquare",
        align: "float_right",
        distanceToPre: 1
    },
    // moveDown, moveLR 可添加一个
    middle: {
        class: "Rect",
        type: "MidSquare",
        align: "middle",
        distanceToPre: 1
    }
    // disappear可添加
}

const shortStrip = {
    left: {
        class: "Rect",
        type: "shortStrip",
        align: "left",
        distanceToPre: 1
    },
    middle: {
        class: "Rect",
        type: "shortStrip",
        align: "middle",
        distanceToPre: 1
    },
    right: {
        class: "Rect",
        type: "shortStrip",
        align: "right",
        distanceToPre: 1
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
        rotateDir: "L"
    },
    right: {
        class: "Whirl",
        type: "RotMidStrip",
        align: "middle",
        distanceToPre: 1,
        rotateDir: "R"
    }
    //可消失
}

const RotSideStrip = {
    left: {
        class: "Whirl",
        type: "RotSideStrip",
        align: "leftMost",
        distanceToPre: 1,
        rotateDir: "R"
    },
    right: {
        class: "Whirl",
        type: "RotSideStrip",
        align: "rightMost",
        distanceToPre: 1,
        rotateDir: "L"
    }
    //可消失
}

