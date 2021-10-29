

interface ShapeNode {
	arc: boolean,
	x: number,
	y: number,
	r?: number,
}

enum AnimationState {
	dark,
	lightening,
	light,
	darkening,
}

class Tile {

	private num;


	private gridX: number;
	private gridY: number;
	private color: string;

	private offsetY: number;
	private scale: number;

	private animationVal: number = 0;
	private animationState: AnimationState = AnimationState.dark;

	private nodeList: Array<ShapeNode>;

	private prevMillis: number = performance.now();

	private timeoutId: number = 0;

	private tileSize: number = 0;
	private shapeRadius: number = 0;

	constructor(
		num: number,
		gridX: number, gridY: number,
		color: string,
		nodeList: Array<ShapeNode>,
		offsetY?: number, scale?: number,
	) {
		this.num = num;
		this.gridX = gridX;
		this.gridY = gridY;
		this.color = color;

		this.offsetY = offsetY ? offsetY : 0;
		this.scale = scale ? scale : 1;


		this.nodeList = nodeList;
	}

	public draw = (ctx: CanvasRenderingContext2D): void => {
		ctx.fillStyle = ctx.strokeStyle = this.color;
		ctx.lineWidth = this.tileSize / 20;

		ctx.lineJoin = "round"


		ctx.beginPath();

		// ctx.moveTo(0, 0);
		this.nodeList.forEach((
			item: ShapeNode,
			index: number,
		) => {

			if (item.arc) {
				ctx.arcTo(
					(this.gridX + .5) * this.tileSize
					+ (item.x) * this.shapeRadius,

					(this.gridY + .5) * this.tileSize
					+ (item.y + this.offsetY) * this.shapeRadius,

					(this.gridX + .5) * this.tileSize + (this.nodeList[
						(index + 1) % this.nodeList.length
					].x) * this.shapeRadius,

					(this.gridY + .5) * this.tileSize + (this.nodeList[
						(index + 1) % this.nodeList.length
					].y + this.offsetY) * this.shapeRadius,

					item.r ? item.r * this.shapeRadius : 0,
				)
			} else {
				ctx.lineTo(
					(this.gridX + .5) * this.tileSize
					+ (item.x) * this.shapeRadius,

					(this.gridY + .5) * this.tileSize
					+ (item.y + this.offsetY) * this.shapeRadius,
				);
			}
		});
		// console.log(ctx.globalAlpha);
		ctx.closePath();

		// this.animationVal =
		// 	Math.max(
		// 		Math.min(
		// 			Math.abs((performance.now() / 500) % 4 - 2) - .5, 1,
		// 		), 0,
		// 	);

		let animationVals = {
			lighten: 100,
			light: 200,
			darken: 200,
		};

		if (this.animationState === AnimationState.lightening) {
			this.animationVal +=
				(performance.now() - this.prevMillis) / animationVals.lighten;

			if (this.animationVal >= 1) {
				this.animationVal = 1;
				this.animationState = AnimationState.light;

				this.timeoutId = window.setTimeout(() =>
					this.animateShape(AnimationState.darkening), animationVals.light);
			}
		} else if (this.animationState === AnimationState.darkening) {
			this.animationVal -=
				(performance.now() - this.prevMillis) / animationVals.darken;

			if (this.animationVal <= 0) {
				this.animationVal = 0;
				this.animationState = AnimationState.dark;
			}
		}

		ctx.globalAlpha = this.animationVal;
		ctx.fill();
		ctx.globalAlpha = 1;
		ctx.stroke();

		ctx.font = `bold ${this.tileSize * .4}px Arial, sans-serif`;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		if (this.animationVal < .5) {
			ctx.fillStyle = this.color;
			ctx.globalAlpha = 1 - this.animationVal * 2;
		} else {
			ctx.fillStyle = "#202124";
			ctx.globalAlpha = this.animationVal * 2 - 1;
		}
		ctx.fillText(
			this.num.toString(),
			(this.gridX + .5) * this.tileSize,
			(this.gridY + .53) * this.tileSize + this.offsetY * this.shapeRadius);

		this.prevMillis = performance.now();
	}

	public resize = (
		fWidth: number, fHeight: number
	): void => {
		this.tileSize = fWidth / manager.gridWidth;
		let globalScaling = .7;
		this.shapeRadius = this.tileSize * .5 * globalScaling * this.scale;
	}

	public animateShape = (state: AnimationState) => {
		// if (state === AnimationState.darkening) {
		// 	this.animationState = AnimationState.darkening;
		// } else if (state === AnimationState.lightening) {
		// 	this.animationState = AnimationState.lightening;
		// }
		if (state === AnimationState.lightening
			&& this.animationState !== AnimationState.dark) {
			this.animationVal = 0;
			window.clearTimeout(this.timeoutId);
		}
		this.animationState = state;
	}

	public getXY = (): { x: number, y: number } => {
		return {
			x: this.gridX,
			y: this.gridY,
		};
	}

}

