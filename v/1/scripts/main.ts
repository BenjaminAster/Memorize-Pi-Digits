
console.log("test");

// https://kernhanda.github.io/tutorial-typescript-canvas-drawing/ 
// aaaaaaaaaaa

class DrawingApp {

	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private paint: boolean = false;

	private clickX: number[] = [];
	private clickY: number[] = [];
	public clickDrag: boolean[] = [];

	constructor() {
		let canvas = $("canvas#canvas")[0] as HTMLCanvasElement;
		let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		ctx.strokeStyle = "black";
		ctx.lineWidth = 3;

		this.canvas = canvas;
		this.ctx = ctx;

		this.redraw();
		this.createUserEvents();
	}
	private createUserEvents() {
		let canvas = this.canvas;

		canvas.addEventListener("mousedown", this.pressEventHandler);
		canvas.addEventListener("mousemove", this.dragEventHandler);
		canvas.addEventListener("mouseup", this.releaseEventHandler);
		canvas.addEventListener("mouseout", this.cancelEventHandler);

		canvas.addEventListener("touchstart", this.pressEventHandler);
		canvas.addEventListener("touchmove", this.dragEventHandler);
		canvas.addEventListener("touchend", this.releaseEventHandler);
		canvas.addEventListener("touchcancel", this.cancelEventHandler);

		$("p#clear")[0].addEventListener("click", this.clearEventHandler);
	}

	private redraw() {

		let clickX = this.clickX;
		let ctx = this.ctx;
		let clickDrag = this.clickDrag;
		let clickY = this.clickY;
		for (let i = 0; i < clickX.length; ++i) {
			ctx.beginPath();
			if (clickDrag[i] && i) {
				ctx.moveTo(clickX[i - 1], clickY[i - 1]);
			} else {
				ctx.moveTo(clickX[i], clickY[i]);
			}

			ctx.lineTo(clickX[i], clickY[i]);
			ctx.stroke();
		}
		ctx.closePath();
	}

	private addClick(x: number, y: number, dragging: boolean) {
		this.clickX.push(x);
		this.clickY.push(y);
		this.clickDrag.push(dragging);
	}

	private clearCanvas() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.clickX = [];
		this.clickY = [];
		this.clickDrag = [];
	}

	private clearEventHandler = () => {
		this.clearCanvas();
	}

	private releaseEventHandler = () => {
		this.paint = false;
		this.redraw();
	}

	private cancelEventHandler = () => {
		this.paint = false;
	}

	private pressEventHandler = (e: MouseEvent | TouchEvent) => {
		let mouseX = (e as TouchEvent).changedTouches ?
			(e as TouchEvent).changedTouches[0].pageX :
			(e as MouseEvent).pageX;
		let mouseY = (e as TouchEvent).changedTouches ?
			(e as TouchEvent).changedTouches[0].pageY :
			(e as MouseEvent).pageY;
		mouseX -= this.canvas.offsetLeft;
		mouseY -= this.canvas.offsetTop;

		this.paint = true;
		this.addClick(mouseX, mouseY, false);
		this.redraw();
	}

	private dragEventHandler = (e: MouseEvent | TouchEvent) => {
		let mouseX = (e as TouchEvent).changedTouches ?
			(e as TouchEvent).changedTouches[0].pageX :
			(e as MouseEvent).pageX;
		let mouseY = (e as TouchEvent).changedTouches ?
			(e as TouchEvent).changedTouches[0].pageY :
			(e as MouseEvent).pageY;
		mouseX -= this.canvas.offsetLeft;
		mouseY -= this.canvas.offsetTop;

		if (this.paint) {
			this.addClick(mouseX, mouseY, true);
			this.redraw();
		}

		e.preventDefault();
	}
}

let drawingApp = new DrawingApp();



class DrawingApp2 {
	private canvas: HTMLCanvasElement;
	private context: CanvasRenderingContext2D;
	private paint: boolean = false;

	private clickX: number[] = [];
	private clickY: number[] = [];
	private clickDrag: boolean[] = [];

	constructor() {
		let canvas = document.getElementById('canvas') as
			HTMLCanvasElement;
		let context = canvas.getContext("2d") as CanvasRenderingContext2D;
		context.lineCap = 'round';
		context.lineJoin = 'round';
		context.strokeStyle = 'black';
		context.lineWidth = 1;

		this.canvas = canvas;
		this.context = context;

		this.redraw();
		this.createUserEvents();
	}

	private createUserEvents() {
		let canvas = this.canvas;

		canvas.addEventListener("mousedown", this.pressEventHandler);
		canvas.addEventListener("mousemove", this.dragEventHandler);
		canvas.addEventListener("mouseup", this.releaseEventHandler);
		canvas.addEventListener("mouseout", this.cancelEventHandler);

		canvas.addEventListener("touchstart", this.pressEventHandler);
		canvas.addEventListener("touchmove", this.dragEventHandler);
		canvas.addEventListener("touchend", this.releaseEventHandler);
		canvas.addEventListener("touchcancel", this.cancelEventHandler);

		(document.getElementById('clear') as HTMLElement).addEventListener("click", this.clearEventHandler);
	}

	private redraw() {
		let clickX = this.clickX;
		let context = this.context;
		let clickDrag = this.clickDrag;
		let clickY = this.clickY;
		for (let i = 0; i < clickX.length; ++i) {
			context.beginPath();
			if (clickDrag[i] && i) {
				context.moveTo(clickX[i - 1], clickY[i - 1]);
			} else {
				context.moveTo(clickX[i] - 1, clickY[i]);
			}

			context.lineTo(clickX[i], clickY[i]);
			context.stroke();
		}
		context.closePath();
	}

	private addClick(x: number, y: number, dragging: boolean) {
		this.clickX.push(x);
		this.clickY.push(y);
		this.clickDrag.push(dragging);
	}

	private clearCanvas() {
		this.context
			.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.clickX = [];
		this.clickY = [];
		this.clickDrag = [];
	}

	private clearEventHandler = () => {
		this.clearCanvas();
	}

	private releaseEventHandler = () => {
		this.paint = false;
		this.redraw();
	}

	private cancelEventHandler = () => {
		this.paint = false;
	}

	private pressEventHandler = (e: MouseEvent | TouchEvent) => {
		let mouseX = (e as TouchEvent).changedTouches ?
			(e as TouchEvent).changedTouches[0].pageX :
			(e as MouseEvent).pageX;
		let mouseY = (e as TouchEvent).changedTouches ?
			(e as TouchEvent).changedTouches[0].pageY :
			(e as MouseEvent).pageY;
		mouseX -= this.canvas.offsetLeft;
		mouseY -= this.canvas.offsetTop;

		this.paint = true;
		this.addClick(mouseX, mouseY, false);
		this.redraw();
	}

	private dragEventHandler = (e: MouseEvent | TouchEvent) => {
		let mouseX = (e as TouchEvent).changedTouches ?
			(e as TouchEvent).changedTouches[0].pageX :
			(e as MouseEvent).pageX;
		let mouseY = (e as TouchEvent).changedTouches ?
			(e as TouchEvent).changedTouches[0].pageY :
			(e as MouseEvent).pageY;
		mouseX -= this.canvas.offsetLeft;
		mouseY -= this.canvas.offsetTop;

		if (this.paint) {
			this.addClick(mouseX, mouseY, true);
			this.redraw();
		}

		e.preventDefault();
	}
}

// new DrawingApp2();



// asdfasdfasdf

// let canvas: HTMLCanvasElement,
// 	ctx: CanvasRenderingContext2D;

// window.onload = function () {
// 	canvas = $("canvas#canvas")[0] as HTMLCanvasElement;
// 	ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

// 	// document.addEventListener("keydown", keyDownEvent);

// 	// render X times per second
// 	let x = 8;
// 	// setInterval(draw, 1000 / x);
// };

