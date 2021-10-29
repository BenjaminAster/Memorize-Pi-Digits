
interface FrameDimentions {
	fX: number,
	fY: number,
	fWidth: number,
	fHeight: number,
}

class Frame {

	protected fX: number = 0;
	protected fY: number = 0;

	protected fWidth: number = 0;
	protected fHeight: number = 0;

	constructor() {
		console.log("new Frame");
	}

	public resizeFrame = (
		frameX: number,
		frameY: number,
		frameWidth: number,
		frameHeight: number
	): void => {
		// console.log("resizing frame");

		this.fX = frameX;
		this.fY = frameY;
		this.fWidth = frameWidth;
		this.fHeight = frameHeight;

		this.resize();
	}

	// protected setOffset = (x: number, y: number): void => {
	// 	this.fX = x;
	// 	this.fY = y;
	// }

	public getOffset = (): { x: number, y: number } => {
		return {
			x: this.fX,
			y: this.fY,
		};
	}

	protected resize = (): void => { };

	// public draw = () => {
	// 	console.log("drawing in Frame");
	// }


	public draw = (ctx: CanvasRenderingContext2D) => { };
}

