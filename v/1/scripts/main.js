"use strict";
console.log("test");
// https://kernhanda.github.io/tutorial-typescript-canvas-drawing/ 
// aaaaaaaaaaa
class DrawingApp {
    constructor() {
        this.paint = false;
        this.clickX = [];
        this.clickY = [];
        this.clickDrag = [];
        this.clearEventHandler = () => {
            this.clearCanvas();
        };
        this.releaseEventHandler = () => {
            this.paint = false;
            this.redraw();
        };
        this.cancelEventHandler = () => {
            this.paint = false;
        };
        this.pressEventHandler = (e) => {
            let mouseX = e.changedTouches ?
                e.changedTouches[0].pageX :
                e.pageX;
            let mouseY = e.changedTouches ?
                e.changedTouches[0].pageY :
                e.pageY;
            mouseX -= this.canvas.offsetLeft;
            mouseY -= this.canvas.offsetTop;
            this.paint = true;
            this.addClick(mouseX, mouseY, false);
            this.redraw();
        };
        this.dragEventHandler = (e) => {
            let mouseX = e.changedTouches ?
                e.changedTouches[0].pageX :
                e.pageX;
            let mouseY = e.changedTouches ?
                e.changedTouches[0].pageY :
                e.pageY;
            mouseX -= this.canvas.offsetLeft;
            mouseY -= this.canvas.offsetTop;
            if (this.paint) {
                this.addClick(mouseX, mouseY, true);
                this.redraw();
            }
            e.preventDefault();
        };
        let canvas = $("canvas#canvas")[0];
        let ctx = canvas.getContext("2d");
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        this.canvas = canvas;
        this.ctx = ctx;
        this.redraw();
        this.createUserEvents();
    }
    createUserEvents() {
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
    redraw() {
        let clickX = this.clickX;
        let ctx = this.ctx;
        let clickDrag = this.clickDrag;
        let clickY = this.clickY;
        for (let i = 0; i < clickX.length; ++i) {
            ctx.beginPath();
            if (clickDrag[i] && i) {
                ctx.moveTo(clickX[i - 1], clickY[i - 1]);
            }
            else {
                ctx.moveTo(clickX[i], clickY[i]);
            }
            ctx.lineTo(clickX[i], clickY[i]);
            ctx.stroke();
        }
        ctx.closePath();
    }
    addClick(x, y, dragging) {
        this.clickX.push(x);
        this.clickY.push(y);
        this.clickDrag.push(dragging);
    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.clickX = [];
        this.clickY = [];
        this.clickDrag = [];
    }
}
let drawingApp = new DrawingApp();
class DrawingApp2 {
    constructor() {
        this.paint = false;
        this.clickX = [];
        this.clickY = [];
        this.clickDrag = [];
        this.clearEventHandler = () => {
            this.clearCanvas();
        };
        this.releaseEventHandler = () => {
            this.paint = false;
            this.redraw();
        };
        this.cancelEventHandler = () => {
            this.paint = false;
        };
        this.pressEventHandler = (e) => {
            let mouseX = e.changedTouches ?
                e.changedTouches[0].pageX :
                e.pageX;
            let mouseY = e.changedTouches ?
                e.changedTouches[0].pageY :
                e.pageY;
            mouseX -= this.canvas.offsetLeft;
            mouseY -= this.canvas.offsetTop;
            this.paint = true;
            this.addClick(mouseX, mouseY, false);
            this.redraw();
        };
        this.dragEventHandler = (e) => {
            let mouseX = e.changedTouches ?
                e.changedTouches[0].pageX :
                e.pageX;
            let mouseY = e.changedTouches ?
                e.changedTouches[0].pageY :
                e.pageY;
            mouseX -= this.canvas.offsetLeft;
            mouseY -= this.canvas.offsetTop;
            if (this.paint) {
                this.addClick(mouseX, mouseY, true);
                this.redraw();
            }
            e.preventDefault();
        };
        let canvas = document.getElementById('canvas');
        let context = canvas.getContext("2d");
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.strokeStyle = 'black';
        context.lineWidth = 1;
        this.canvas = canvas;
        this.context = context;
        this.redraw();
        this.createUserEvents();
    }
    createUserEvents() {
        let canvas = this.canvas;
        canvas.addEventListener("mousedown", this.pressEventHandler);
        canvas.addEventListener("mousemove", this.dragEventHandler);
        canvas.addEventListener("mouseup", this.releaseEventHandler);
        canvas.addEventListener("mouseout", this.cancelEventHandler);
        canvas.addEventListener("touchstart", this.pressEventHandler);
        canvas.addEventListener("touchmove", this.dragEventHandler);
        canvas.addEventListener("touchend", this.releaseEventHandler);
        canvas.addEventListener("touchcancel", this.cancelEventHandler);
        document.getElementById('clear').addEventListener("click", this.clearEventHandler);
    }
    redraw() {
        let clickX = this.clickX;
        let context = this.context;
        let clickDrag = this.clickDrag;
        let clickY = this.clickY;
        for (let i = 0; i < clickX.length; ++i) {
            context.beginPath();
            if (clickDrag[i] && i) {
                context.moveTo(clickX[i - 1], clickY[i - 1]);
            }
            else {
                context.moveTo(clickX[i] - 1, clickY[i]);
            }
            context.lineTo(clickX[i], clickY[i]);
            context.stroke();
        }
        context.closePath();
    }
    addClick(x, y, dragging) {
        this.clickX.push(x);
        this.clickY.push(y);
        this.clickDrag.push(dragging);
    }
    clearCanvas() {
        this.context
            .clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.clickX = [];
        this.clickY = [];
        this.clickDrag = [];
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
//# sourceMappingURL=main.js.map