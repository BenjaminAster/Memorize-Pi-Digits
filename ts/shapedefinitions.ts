let shapeDefinitions: Array<{
	num: number,
	gridX: number, gridY: number,
	color: string,
	offsetY?: number, scale?: number,
	nodeList: Array<ShapeNode>,
}> = [
		{
			num: 0,
			gridX: 1, gridY: 3,
			color: "#ef0",
			nodeList: [
				{ arc: false, x: 0, y: -1 },
				{ arc: true, x: 1, y: -1, r: 1 },
				{ arc: false, x: 1, y: 0 },
				{ arc: true, x: 1, y: 1, r: 1 },
				{ arc: false, x: 0, y: 1 },
				{ arc: true, x: -1, y: 1, r: 1 },
				{ arc: false, x: -1, y: 0 },
				{ arc: true, x: -1, y: -1, r: 1 },
			],
		},
		{
			num: 1,
			gridX: 0, gridY: 2,
			color: "#0ff",
			nodeList: [

				{ arc: false, x: 1, y: 1 },
				{ arc: false, x: 0, y: 1 },
				{ arc: true, x: -1, y: 1, r: 1 },
				{ arc: false, x: -1, y: 0 },
				{ arc: true, x: -1, y: -1, r: 1 },

				{ arc: false, x: 0, y: -1 },
				{ arc: true, x: 1, y: -1, r: 1 },
				{ arc: false, x: 1, y: 0 },

			],
		},
		{
			num: 2,
			gridX: 1, gridY: 2,
			color: "#6b0",
			nodeList: [
				{ arc: false, x: 1, y: -1 },
				{ arc: false, x: 1, y: 0 },
				{ arc: true, x: 1, y: 1, r: 1 },
				{ arc: false, x: 0, y: 1 },

				{ arc: false, x: -1, y: 1 },
				{ arc: false, x: -1, y: 0 },
				{ arc: true, x: -1, y: -1, r: 1 },
				{ arc: false, x: 0, y: -1 },
			],
		},
		{
			num: 3,
			gridX: 2, gridY: 2,
			color: "#f00",
			offsetY: .25, scale: 1.25,
			nodeList: [
				{
					arc: false,
					x: Math.cos((0 / 1.5 - .5) * Math.PI),
					y: Math.sin((0 / 1.5 - .5) * Math.PI),
				}, {
					arc: false,
					x: Math.cos((1 / 1.5 - .5) * Math.PI),
					y: Math.sin((1 / 1.5 - .5) * Math.PI),
				}, {
					arc: false,
					x: Math.cos((2 / 1.5 - .5) * Math.PI),
					y: Math.sin((2 / 1.5 - .5) * Math.PI),
				},
			]
		},
		{
			num: 4,
			gridX: 0, gridY: 1,
			color: "#0f4",
			nodeList: [
				{ arc: false, x: -1, y: -1 },
				{ arc: false, x: -1, y: 1 },
				{ arc: false, x: 1, y: 1 },
				{ arc: false, x: 1, y: -1 },
			]
		},
		{
			num: 5,
			gridX: 1, gridY: 1,
			color: "#b80",
			offsetY: .1, scale: 1.15,
			nodeList: [
				{
					arc: false,
					x: Math.cos((0 / 2.5 - .5) * Math.PI),
					y: Math.sin((0 / 2.5 - .5) * Math.PI),
				}, {
					arc: false,
					x: Math.cos((1 / 2.5 - .5) * Math.PI),
					y: Math.sin((1 / 2.5 - .5) * Math.PI),
				}, {
					arc: false,
					x: Math.cos((2 / 2.5 - .5) * Math.PI),
					y: Math.sin((2 / 2.5 - .5) * Math.PI),
				}, {
					arc: false,
					x: Math.cos((3 / 2.5 - .5) * Math.PI),
					y: Math.sin((3 / 2.5 - .5) * Math.PI),
				}, {
					arc: false,
					x: Math.cos((4 / 2.5 - .5) * Math.PI),
					y: Math.sin((4 / 2.5 - .5) * Math.PI),
				},
			]
		},
		{
			num: 6,
			gridX: 2, gridY: 1,
			color: "#90f",
			scale: 1.15,
			nodeList: [
				{
					arc: false,
					x: Math.cos((0 / 3 - .5) * Math.PI),
					y: Math.sin((0 / 3 - .5) * Math.PI),
				}, {
					arc: false,
					x: Math.cos((1 / 3 - .5) * Math.PI),
					y: Math.sin((1 / 3 - .5) * Math.PI),
				}, {
					arc: false,
					x: Math.cos((2 / 3 - .5) * Math.PI),
					y: Math.sin((2 / 3 - .5) * Math.PI),
				}, {
					arc: false,
					x: Math.cos((3 / 3 - .5) * Math.PI),
					y: Math.sin((3 / 3 - .5) * Math.PI),
				}, {
					arc: false,
					x: Math.cos((4 / 3 - .5) * Math.PI),
					y: Math.sin((4 / 3 - .5) * Math.PI),
				}, {
					arc: false,
					x: Math.cos((5 / 3 - .5) * Math.PI),
					y: Math.sin((5 / 3 - .5) * Math.PI),
				},
			]
		},
		// {
		// 	num: 7,
		// 	gridX: 0, gridY: 0,
		// 	color: "#f09",
		// 	offsetY: .1, scale: 1.15,
		// 	nodeList: [
		// 		{
		// 			arc: false,
		// 			x: Math.cos((0 / 3.5 - .5) * Math.PI),
		// 			y: Math.sin((0 / 3.5 - .5) * Math.PI),
		// 		}, {
		// 			arc: false,
		// 			x: Math.cos((1 / 3.5 - .5) * Math.PI),
		// 			y: Math.sin((1 / 3.5 - .5) * Math.PI),
		// 		}, {
		// 			arc: false,
		// 			x: Math.cos((2 / 3.5 - .5) * Math.PI),
		// 			y: Math.sin((2 / 3.5 - .5) * Math.PI),
		// 		}, {
		// 			arc: false,
		// 			x: Math.cos((3 / 3.5 - .5) * Math.PI),
		// 			y: Math.sin((3 / 3.5 - .5) * Math.PI),
		// 		}, {
		// 			arc: false,
		// 			x: Math.cos((4 / 3.5 - .5) * Math.PI),
		// 			y: Math.sin((4 / 3.5 - .5) * Math.PI),
		// 		}, {
		// 			arc: false,
		// 			x: Math.cos((5 / 3.5 - .5) * Math.PI),
		// 			y: Math.sin((5 / 3.5 - .5) * Math.PI),
		// 		}, {
		// 			arc: false,
		// 			x: Math.cos((6 / 3.5 - .5) * Math.PI),
		// 			y: Math.sin((6 / 3.5 - .5) * Math.PI),
		// 		},

		// 	]
		// },
		{
			num: 7,
			gridX: 0, gridY: 0,
			color: "#fa4",
			nodeList: [
				{ arc: false, x: -1, y: 1 },
				{ arc: false, x: -1, y: -1 },
				{ arc: false, x: 0, y: -1 },
				{ arc: true, x: 1, y: -1, r: 1 },
				{ arc: false, x: 1, y: 0 },
				{ arc: true, x: 1, y: 1, r: 1 },
				{ arc: false, x: 0, y: 1 },
			],
		},
		{
			num: 8,
			gridX: 1, gridY: 0,
			color: "#46f",
			scale: 1.15,
			nodeList: [
				{
					arc: false,
					x: Math.cos((0 / 4 - .125) * Math.PI),
					y: Math.sin((0 / 4 - .125) * Math.PI),
				}, {
					arc: false,
					x: Math.cos((1 / 4 - .125) * Math.PI),
					y: Math.sin((1 / 4 - .125) * Math.PI),
				}, {
					arc: false,
					x: Math.cos((2 / 4 - .125) * Math.PI),
					y: Math.sin((2 / 4 - .125) * Math.PI),
				}, {
					arc: false,
					x: Math.cos((3 / 4 - .125) * Math.PI),
					y: Math.sin((3 / 4 - .125) * Math.PI),
				}, {
					arc: false,
					x: Math.cos((4 / 4 - .125) * Math.PI),
					y: Math.sin((4 / 4 - .125) * Math.PI),
				}, {
					arc: false,
					x: Math.cos((5 / 4 - .125) * Math.PI),
					y: Math.sin((5 / 4 - .125) * Math.PI),
				}, {
					arc: false,
					x: Math.cos((6 / 4 - .125) * Math.PI),
					y: Math.sin((6 / 4 - .125) * Math.PI),
				}, {
					arc: false,
					x: Math.cos((7 / 4 - .125) * Math.PI),
					y: Math.sin((7 / 4 - .125) * Math.PI),
				},
			]
		},
		{
			num: 9,
			gridX: 2, gridY: 0,
			color: "#f09",
			nodeList: [
				{ arc: false, x: 1, y: -1 },
				{ arc: false, x: 1, y: 1 },
				{ arc: false, x: 0, y: 1 },
				{ arc: false, x: -1, y: 0 },
				{ arc: false, x: 0, y: -1 },
			]
		},
	];

