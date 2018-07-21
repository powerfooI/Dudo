const obstacle = {
	Rect: {
		strip: {
			width: 425,
			height: 80
		},
		BigSquare: {
			width: 260,
			height: 280
		},
		MidSquare: {
			width: 210,
			height: 170
		},
		shortStrip: {
			width: 250,
			height: 80
		}
	},
	Whirl: {
		RotMidStrip: {
			//旋转带应略大
			width: 480,
			height: 80
		},
		RotSideStrip: {
			width: 800,
			height: 80,
		},
	}
}

//class种类：目前只有Rect
//type种类：如上
//align种类：left, right, middle, float-left, float-right, leftMost, rightMost
//distanceToPre：k倍于spacing
//animation的种类：moveDown, moveLR, moveRL, rotate_L, rotate_R, SideRotate_L, SideRotate_R, disappear

// Normal_1_0 = [{
// 	"class": "Rect",
// 	"type": "strip",
// 	"align": "left",
// 	"distanceToPre": 0,
// 	"moveDown": {
// 		"distance": 3,
// 		"speedScale": 1
// 	},
// 	"disappear": {
// 		"distance": 1.3,
// 		"speed": 5
// 	}
// }]

const levels = {
	Normal_1_1: [
		{
			"class": "Rect",
			"type": "MidSquare",
			"align": "middle",
			"distanceToPre": 0
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1.6
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 1.6
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "left",
			"distanceToPre": 1.6
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "right",
			"distanceToPre": 0
		}, {
			"class": "Rect",
			"type": "MidSquare",
			"align": "float_left",
			"distanceToPre": 1.6
		},
		{
			"class": "Rect",
			"type": "MidSquare",
			"align": "float_right",
			"distanceToPre": 1
		}
	],

	Normal_1_2: [
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 0
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 1.6
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1.6
		},
		{
			"class": "Rect",
			"type": "BigSquare",
			"align": "middle",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1.6
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "middle",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1.6
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		}
	],

	Normal_1_3: [
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 0
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1.6
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1.6
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
	],

	Normal_1_4: [
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 0
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 1.6
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "MidSquare",
			"align": "float_left",
			"distanceToPre": 1.6
		},
		{
			"class": "Rect",
			"type": "MidSquare",
			"align": "float_right",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "MidSquare",
			"align": "float_left",
			"distanceToPre": 1.6
		},
		{
			"class": "Rect",
			"type": "MidSquare",
			"align": "float_right",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "MidSquare",
			"align": "float_left",
			"distanceToPre": 1
		}
	],

	Normal_1_5:[
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 0
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "middle",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "MidSquare",
			"align": "float_left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "MidSquare",
			"align": "float_right",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "middle",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 1
		}
	],

	Normal_2_1:[
		{
			"class": "Whirl",
			"type": "RotMidStrip",
			"align": "middle",
			"distanceToPre": 0,
			"rotateDir": "L"
		},
	],

	Normal_2_2: [
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 0
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "right",
			"distanceToPre": 0.7
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 1.6
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "left",
			"distanceToPre": 0.7
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 1.6
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "right",
			"distanceToPre": 0.7
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1.6
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "right",
			"distanceToPre": 0.7
		}
	],

	Normal_2_3: [
		{
			"class": "Whirl",
			"type": "RotMidStrip",
			"align": "middle",
			"distanceToPre": 0,
			"rotateDir": "L"
		},
		{
			"class": "Whirl",
			"type": "RotMidStrip",
			"align": "middle",
			"distanceToPre": 1.5,
			"rotateDir": "R"
		},
		{
			"class": "Whirl",
			"type": "RotMidStrip",
			"align": "middle",
			"distanceToPre": 1.5,
			"rotateDir": "L"
		},
	],

	Normal_2_4: [
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 0
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "MidSquare",
			"align": "float_left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "MidSquare",
			"align": "float_right",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "right",
			"distanceToPre": 0.7
		}
	],

	Normal_2_5:[
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 0
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "left",
			"distanceToPre": 0.7
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 1.2
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "left",
			"distanceToPre": 0.7
		},
		{
			"class": "Rect",
			"type": "MidSquare",
			"align": "float_right",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "MidSquare",
			"align": "float_left",
			"distanceToPre": 1
		},
		{
			"class": "Whirl",
			"type": "RotMidStrip",
			"align": "middle",
			"distanceToPre": 1.5,
			"rotateDir": "R"
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 1.5
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "left",
			"distanceToPre": 0.7
		}
	],

	Normal_2_6: [
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 0
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "right",
			"distanceToPre": 0.7
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "middle",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "left",
			"distanceToPre": 0.7
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 1.2
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "left",
			"distanceToPre": 0.7
		},
		{
			"class": "Whirl",
			"type": "RotMidStrip",
			"align": "middle",
			"distanceToPre": 1.5,
			"rotateDir": "R"
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "middle",
			"distanceToPre": 1.3
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "right",
			"distanceToPre": 0.7
		},
		{
			"class": "Whirl",
			"type": "RotMidStrip",
			"align": "middle",
			"distanceToPre": 1.5,
			"rotateDir": "L"
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "middle",
			"distanceToPre": 1.3
		}
	],

	Normal_3_1: [
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 0,
			moveDown: {
				distance: 2.3,
				speedScale: 1.2,
			}
		},
		{
			"class": "Rect",
			"type": "shortStrip",
			"align": "middle",
			"distanceToPre": 1,
			moveDown: {
				distance: 2,
				speedScale: 1,
			}
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 0
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 1
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1
		}
	],

	Normal_3_2: [
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 0,
			moveDown: {
				distance: 2,
				speedScale: 1.2,
			}
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 1,
			moveDown: {
				distance: 3,
				speedScale: 1.2,
			}
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 1,
			moveDown: {
				distance: 2.3,
				speedScale: 1.2,
			}
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 0
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 2,
			moveDown: {
				distance: 2.3,
				speedScale: 1.2,
			}
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 0
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 2,
			moveDown: {
				distance: 2.3,
				speedScale: 1.2,
			}
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 0
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 2,
			moveDown: {
				distance: 2.3,
				speedScale: 1.2,
			}
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 0
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 2,
			moveDown: {
				distance: 2.3,
				speedScale: 1.2,
			}
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "left",
			"distanceToPre": 0
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 2,
			moveDown: {
				distance: 2.3,
				speedScale: 1.2,
			}
		},
		{
			"class": "Rect",
			"type": "strip",
			"align": "right",
			"distanceToPre": 0
		}
	],
}

module.exports = {
	obstacle,
	levels
}