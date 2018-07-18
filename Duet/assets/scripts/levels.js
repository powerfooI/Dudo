const obstacle = {
	Rect:{
		strip: {
			width: 450,
			height: 80
		},
		square: {
			width: 200,
			height: 250
		},
		shortStrip: {
			width: 200,
			height: 80
		}
	},
	Whirl: {

	}
}

const levels = {
	level_1_0: [
		{
			class: "Rect",
			type: "shortStrip",
			align: "middle",
			distanceToPre: 1
		},
		{
			class: "Rect",
			type: "square",
			align: "middle",
			distanceToPre: 1
		}
	],
	Normal_1_1: [
		{
			class: "Rect",
			type: "strip",
			align: "left",
			distanceToPre: 0
		},{
			class: "Rect",
			type: "square",
			align: "middle",
			distanceToPre: 1
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
			type: "square",
			align: "middle",
			distanceToPre: 1
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
			type: "square",
			align: "middle",
			distanceToPre: 1
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
	]
}

module.exports = {obstacle,levels}