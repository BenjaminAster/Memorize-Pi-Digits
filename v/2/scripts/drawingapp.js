"use strict";
console.log("test");
// https://kernhanda.github.io/tutorial-typescript-canvas-drawing/ 
class DrawingApp {
    constructor() {
        this.cWidth = 0;
        this.cHeight = 0;
        this.frames = {};
        this.draw = () => {
            Object.values(this.frames).forEach((value) => value.draw());
            // window.requestAnimationFrame((): void => {
            // 	setTimeout((): void => this.draw(), 1000);
            // });
            setTimeout(() => window.requestAnimationFrame(() => {
                this.draw();
            }));
        };
        this.resize = () => {
            this.cWidth = window.innerWidth;
            this.cHeight = window.innerHeight;
            this.canvas.width = this.cWidth;
            this.canvas.height = this.cHeight;
            this.frames.mainFrame.resize(100, 100, this.cWidth - 200, this.cHeight - 200);
        };
        let canvas = $("canvas#canvas")[0];
        let ctx = canvas.getContext("2d");
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
        console.log(this.cWidth);
    }
}
//# sourceMappingURL=drawingapp.js.map