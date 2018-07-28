"use strict";
cc._RF.push(module, '14736tJxFlBip/mPE0JQAjw', 'levels');
// scripts/levels.js

"use strict";

//此文件为关卡文件，其中包含了所有关卡和无尽模式的关卡生成算法

var obstacle = {
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
			height: 80
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

};var levels = {
	Normal_1_1: [{
		"class": "Rect",
		"type": "MidSquare",
		"align": "middle",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1.6
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1.6
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 1.6
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1.6
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}],

	Normal_1_2: [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1.6
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1.6
	}, {
		"class": "Rect",
		"type": "BigSquare",
		"align": "middle",
		"distanceToPre": 1.3
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1.3
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1.6
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1.6
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}],

	Normal_1_3: [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}],

	Normal_1_4: [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1.6
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1.6
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1.6
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}],

	Normal_1_5: [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}],

	Normal_2_1: [{
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 0,
		"rotateDir": "L"
	}],

	Normal_2_2: [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1.6
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1.6
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1.6
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}],

	Normal_2_3: [{
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 0,
		"rotateDir": "L"
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}],

	Normal_2_4: [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}],

	Normal_2_5: [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1.2
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1.5
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 0.7
	}],

	Normal_2_6: [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1.2
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 0.7
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1.3
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1.3
	}],

	Normal_3_1: [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1,
		moveDown: {
			distance: 2,
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}],

	Normal_3_2: [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		moveDown: {
			distance: 2,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveDown: {
			distance: 3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}],

	Normal_3_3: [{
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 1.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}],

	Normal_3_4: [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0
	}],

	Normal_3_5: [{
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 2
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1.5
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}],

	Normal_4_1: [{
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "rightMost",
		"distanceToPre": 0,
		"rotateDir": "L"
	}, {
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "leftMost",
		"distanceToPre": 3.2,
		"rotateDir": "R"
	}, {
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "rightMost",
		"distanceToPre": 3.2,
		"rotateDir": "L"
	}],

	Normal_4_2: [{
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "rightMost",
		"distanceToPre": 0,
		"rotateDir": "L"
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1.5
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1.5
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}],

	Normal_4_3: [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 0.7
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1.5
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}, {
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "leftMost",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1.5
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 0.7
	}],

	Normal_4_4: [{
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 1.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.2,
		"rotateDir": "R"
	}, {
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "rightMost",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "rightMost",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}],

	Normal_4_5: [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "rightMost",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1.5
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 2
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1.7,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}],

	Normal_4_6: [{
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "rightMost",
		"distanceToPre": 0,
		"rotateDir": "L"
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.3,
		"rotateDir": "L"
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.3,
		"rotateDir": "L"
	}, {
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "rightMost",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.3,
		"rotateDir": "L"
	}],

	Normal_5_1: [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}],

	Normal_5_2: [{
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 0.8
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 0.8
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 0.8
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 0.8
		}
	}],

	Normal_5_3: [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}],

	Normal_5_4: [{
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 1.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 1.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}],

	Normal_5_5: [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 0.8
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 0.8
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0
	}],

	Normal_5_6: [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}],

	Normal_6_1: [{
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1.2
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1.2
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1.2
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1.2
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1.2
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}],

	Normal_6_2: [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 1.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 1.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1.7,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 1.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 0
	}],

	Normal_6_3: [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 2.5,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 2
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1.7,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 1.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 2.5,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 0
	}],

	Normal_6_4: [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1.2
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 3.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1.5
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1.2
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1.5
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 2.5,
		"rotateDir": "L",
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 0
	}],

	Normal_6_5: [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 1.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 2.5,
		"rotateDir": "R",
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 0.8
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 0.8
		}
	}, {
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "leftMost",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "rightMost",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 2
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1.7,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0
	}],

	Normal_6_6: [{
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 1.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 1.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0
	}, {
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "leftMost",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 2
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 0
	}],

	Normal_7_1: [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 0
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 0
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}],

	Normal_7_2: [{
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 0
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 0
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 0.5
		}
	}],

	Normal_7_3: [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 0
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0,
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0,
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0,
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 0.5
		}
	}],

	Normal_7_4: [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 1.7,
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 0.8
		},
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 0.8
		},
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 0.8
		},
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 0.8
		},
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0,
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		},
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		},
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		},
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 0.7,
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 0.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 0.5
		}
	}],

	Normal_7_5: [{
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		},
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 1.7,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 1.9,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		},
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		},
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		},
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 1.5
		}
	}],

	Normal_7_6: [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 1.7,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1.7,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 0,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 0.7,
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.5
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 1.5
		}
	}],

	Normal_7_7: [{
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 0,
		moveLR: {
			speedScale: 0.8
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 0.8
		},
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 0.8
		},
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 0.8
		},
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 1.7,
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 1.7,
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0,
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 1.7,
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 0.8
		},
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 0.8
		},
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 1.7,
		"disappear": {
			"distance": 1.7
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 1.7
		}
	}],

	Normal_7_8: [{
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "leftMost",
		"distanceToPre": 0,
		"rotateDir": "R"
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1.5,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 1.7,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 1.7,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1.5,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "leftMost",
		"distanceToPre": 1.5,
		"rotateDir": "R",
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1.5,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}],

	Normal_7_9: [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		},
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		},
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		moveLR: {
			speedScale: 1
		},
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 2,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0.3,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 0.7,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 0,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 2,
		moveDown: {
			distance: 2.3,
			speedScale: 1.2
		},
		"disappear": {
			"distance": 2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 0,
		"disappear": {
			"distance": 2
		}
	}]
};

var endlessPatterns = [{
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1.2
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1.2
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1.2
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1.2
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}],
	"addToNext": 0.5
}, {
	"content": [{
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}],
	"addToNext": 0.5
}, {
	"content": [{
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}],
	"addToNext": 0.5
}, {
	"content": [{
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}, {
		"class": "Whirl",
		"type": "RotMidStrip",
		"align": "middle",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}],
	"addToNext": 0.5
}, {
	"content": [{
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "leftMost",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}],
	"addToNext": 1.5
}, {
	"content": [{
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "rightMost",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}],
	"addToNext": 1.5
}, {
	"content": [{
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "leftMost",
		"distanceToPre": 1.5,
		"rotateDir": "R"
	}, {
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "rightMost",
		"distanceToPre": 3,
		"rotateDir": "L"
	}, {
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "leftMost",
		"distanceToPre": 3,
		"rotateDir": "R"
	}],
	"addToNext": 1.5
}, {
	"content": [{
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "rightMost",
		"distanceToPre": 1.5,
		"rotateDir": "L"
	}, {
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "leftMost",
		"distanceToPre": 3,
		"rotateDir": "R"
	}, {
		"class": "Whirl",
		"type": "RotSideStrip",
		"align": "rightMost",
		"distanceToPre": 3,
		"rotateDir": "L"
	}],
	"addToNext": 1.5
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		"moveDown": {
			"distance": 2.3,
			"speedScale": 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		"moveDown": {
			"distance": 2.3,
			"speedScale": 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		"moveDown": {
			"distance": 2.3,
			"speedScale": 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 2,
		"moveDown": {
			"distance": 2.3,
			"speedScale": 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 2.2,
		"moveDown": {
			"distance": 2.3,
			"speedScale": 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 0
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 2.2,
		"moveDown": {
			"distance": 2.3,
			"speedScale": 1.2
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 0
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 0.7
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1.2
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 0.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1.2
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 0.7
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "shortStrip",
		"align": "right",
		"distanceToPre": 1.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0.3,
		"moveDown": {
			"distance": 2.3,
			"speedScale": 1.2
		}
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "shortStrip",
		"align": "left",
		"distanceToPre": 1.7
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0.3,
		"moveDown": {
			"distance": 2.3,
			"speedScale": 1.2
		}
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		"moveDown": {
			"distance": 2.3,
			"speedScale": 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 0
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 2,
		"moveDown": {
			"distance": 2.3,
			"speedScale": 1.2
		}
	}, {
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 0
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2,
		"moveDown": {
			"distance": 2.3,
			"speedScale": 1.2
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "shortStrip",
		"align": "middle",
		"distanceToPre": 2
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 0,
		"moveDown": {
			"distance": 2.3,
			"speedScale": 1.2
		}
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"moveLR": {
			"speedScale": 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"moveLR": {
			"speedScale": 1
		}
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"moveLR": {
			"speedScale": 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"moveLR": {
			"speedScale": 1
		}
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"moveLR": {
			"speedScale": 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"moveLR": {
			"speedScale": 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "left",
		"distanceToPre": 1,
		"moveLR": {
			"speedScale": 1
		}
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"moveLR": {
			"speedScale": 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"moveLR": {
			"speedScale": 1
		}
	}, {
		"class": "Rect",
		"type": "strip",
		"align": "right",
		"distanceToPre": 1,
		"moveLR": {
			"speedScale": 1
		}
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1.2,
		"moveLR": {
			"speedScale": 0.8
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1,
		"moveLR": {
			"speedScale": 0.8
		}
	}],
	"addToNext": 0
}, {
	"content": [{
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_right",
		"distanceToPre": 1.2,
		"moveLR": {
			"speedScale": 0.8
		}
	}, {
		"class": "Rect",
		"type": "MidSquare",
		"align": "float_left",
		"distanceToPre": 1,
		"moveLR": {
			"speedScale": 0.8
		}
	}],
	"addToNext": 0
}];

var constructEndless = function constructEndless() {
	function copyArray(arr) {
		var narr = [];
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var t = _step.value;

				narr.push(Object.assign({}, t));
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return narr;
	}

	var patternNum = Math.floor(Math.random() * 5 + 10);
	var levelContent = [];
	var addNext = 0;

	//生成障碍
	for (var _i = 0; _i < patternNum; _i++) {
		var index = Math.floor(Math.random() * endlessPatterns.length);
		var cont = copyArray(endlessPatterns[index].content);
		cont[0].distanceToPre += addNext;
		// console.log(index)
		levelContent = levelContent.concat(cont);
		addNext = endlessPatterns[index].addToNext;
	}

	//添加disappear
	for (i in levelContent) {
		switch (Math.floor(Math.random() * 10)) {
			case 0:
			case 1:
				levelContent[i].disappear = {
					"distance": 1,
					"speed": 5
				};
				break;
			case 2:
			case 3:
				levelContent[i].disappear = {
					"distance": 1.5,
					"speed": 5
				};
				break;
			case 4:
				levelContent[i].disappear = {
					"distance": 2,
					"speed": 5
				};
				break;
			default:
				if (levelContent[i].disappear) delete levelContent[i].disappear;
				break;
		}
	}

	//第一个距离减1
	levelContent[0].distanceToPre -= 1;
	// console.log(levelContent.length)
	return levelContent;
};

// constructEndless()

module.exports = {
	obstacle: obstacle,
	levels: levels,
	endlessPatterns: endlessPatterns,
	constructEndless: constructEndless
	// levelNums,
	// levelSpeed
};

cc._RF.pop();