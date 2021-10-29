
console.log("test");

// https://kernhanda.github.io/tutorial-typescript-canvas-drawing/ 

class DrawingApp {

	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;

	private cWidth: number = 0;
	private cHeight: number = 0;

	private frames: any = {};

	constructor() {
		let canvas = $<HTMLCanvasElement>("canvas#canvas")[0];
		let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		ctx.strokeStyle = "black";
		ctx.lineWidth = 3;

		this.canvas = canvas;
		this.ctx = ctx;

		// ctx.

		// this.cWidth = window.innerWidth;
		// this.cHeight = window.innerHeight;

		this.frames.mainFrame = new MainFrame();

		this.resize();

		this.draw();

		console.log(
			this.cWidth
		);
	}

	public draw = (): void => {


		Object.values(this.frames).forEach((value: any) => value.draw());

		// window.requestAnimationFrame((): void => {
		// 	setTimeout((): void => this.draw(), 1000);
		// });
		setTimeout(() => window.requestAnimationFrame((): void => {
			this.draw();
		}));



	}

	public resize = (): void => {
		this.cWidth = window.innerWidth;
		this.cHeight = window.innerHeight;

		this.canvas.width = this.cWidth;
		this.canvas.height = this.cHeight;

		this.frames.mainFrame.resize(
			100,
			100,
			this.cWidth - 200,
			this.cHeight - 200,
		);
	}
}




