const obstacle = {
	Rect:{
		RotMidStrip: {
			//旋转带应略大
			width: 480,
			height: 80
		},
		RotSideStrip: {
			width: 800,
			height: 80,
		},
		strip: {
			width: 425,
			height: 80
		},
		BigSquare: {
			width: 256,
			height: 340
		},
		MidSquare: {
			width: 210,
			height: 170
		},
		shortStrip: {
			width: 200,
			height: 80
		}
	},
}

//animation的种类：moveDown, moveLR, moveRL, rotate_L, rotate_R, SideRotate_L, SideRotate_R, disapper

const levels = {
	Normal_1_1: [
		{
			class: "Rect",
			type: "RotSideStrip",
			align: "rightMost",
			distanceToPre: 0,
			animation: "SideRotate_L"
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 3,
			animation: "disapper"
		},{
			class: "Rect",
			type: "strip",
			align: "right",
			distanceToPre: 0,
			animation: "moveDown"
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1,
			animation: "moveLR"
		},{
			class: "Rect",
			type: "MidSquare",
			align: "float_left",
			distanceToPre: 1,
			animation: "moveLR"
		},{
			class: "Rect",
			type: "strip",
			align: "right",
			distanceToPre: 1,
			animation: "moveRL"
		},{
			class: "Rect",
			type: "strip",
			align: "right",
			distanceToPre: 1,
			animation: "moveRL"
		},{
			class: "Rect",
			type: "strip",
			align: "right",
			distanceToPre: 1,
			animation: "moveRL"
		},{
			class: "Rect",
			type: "RotMidStrip",
			align: "middle",
			distanceToPre: 2,
			animation: "rotate_L"
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 2
		},{
			class: "Rect",
			type: "shortStrip",
			align: "right",
			distanceToPre: 0.5
		},
		{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1
		},{
			class: "Rect",
			type: "BigSquare",
			align: "middle",
			distanceToPre: 2
		},{
			class: "Rect",
			type: "RotMidStrip",
			align: "middle",
			distanceToPre: 2,
			animation: "rotate_R"
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1
		},{
			class: "Rect",
			type: "shortStrip",
			align: "right",
			distanceToPre: 0.5
		},
		{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1
		},{
			class: "Rect",
			type: "RotMidStrip",
			align: "middle",
			distanceToPre: 2,
			animation: "rotate_R"
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1
		},{
			class: "Rect",
			type: "shortStrip",
			align: "right",
			distanceToPre: 0.5
		}
	],
	Normal_1_2: [
		{
			class: "Rect",
			type: "shortStrip",
			align: "middle",
			distanceToPre: 1
		},
		{
			class: "Rect",
			type: "BigSquare",
			align: "middle",
			distanceToPre: 1
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 2,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 2,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 2,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 2,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 2,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1,
		},{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 1,
		},
	],
}

module.exports = {obstacle,levels}