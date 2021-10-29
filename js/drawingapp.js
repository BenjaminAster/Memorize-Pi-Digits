console.log("test");
// https://kernhanda.github.io/tutorial-typescript-canvas-drawing/ 
class DrawingApp {
    canvas;
    ctx;
    cWidth = 0;
    cHeight = 0;
    frames = {};
    // private frames: Array<Frame> = new Array<Frame>();
    // private frameDimentions: Array<FrameDimentions> = new Array<FrameDimentions>();
    // private mainFrame: MainFrame;
    // private tileSize: number = 0;
    constructor() {
        // let canvas = $<HTMLCanvasElement>("canvas#canvas")[0];
        let canvas = document.querySelector("canvas#canvas");
        let ctx = canvas.getContext("2d");
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        this.canvas = canvas;
        this.ctx = ctx;
        console.log("new DrawingApp");
        // new MainFrame();
        // ctx.
        // this.cWidth = window.innerWidth;
        // this.cHeight = window.innerHeight;
        setTimeout(() => {
            this.frames.mainFrame = new MainFrame();
            this.resize();
            window.addEventListener("resize", () => {
                this.resize();
            });
            this.draw();
        });
    }
    draw = () => {
        // this.ctx.save();
        // this.ctx.translate(100, 100);
        // this.ctx.fillStyle = "red";
        // this.ctx.fillRect(0, 0, 100, 100);
        // this.ctx.save();
        // this.ctx.translate(100, 100);
        // this.ctx.fillStyle = "lime";
        // this.ctx.fillRect(0, 0, 100, 100);
        // this.ctx.restore();
        // this.ctx.restore();
        this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);
        Object.values(this.frames).forEach((value) => {
            this.ctx.save();
            this.ctx.translate(value.getOffset().x, value.getOffset().y);
            value.draw(this.ctx);
            this.ctx.restore();
        });
        // window.requestAnimationFrame((): void => {
        // 	setTimeout((): void => this.draw(), 1000);
        // });
        // {
        // this.frames.mainFrame.draw(this.ctx);
        // }
        // setTimeout(() => window.requestAnimationFrame((): void => {
        // 	this.draw();
        // }));
        window.requestAnimationFrame(() => this.draw());
    };
    resize = () => {
        // console.log("resizing canvas");
        this.cWidth = window.innerWidth;
        this.cHeight = window.innerHeight;
        this.canvas.width = this.cWidth;
        this.canvas.height = this.cHeight;
        let tileSize;
        {
            if (this.cWidth * manager.gridHeight > this.cHeight * manager.gridWidth) {
                tileSize = this.cHeight / manager.gridHeight;
                this.frames.mainFrame.resizeFrame((this.cWidth - manager.gridWidth * tileSize) / 2, 0, manager.gridWidth * tileSize, manager.gridHeight * tileSize);
            }
            else {
                tileSize = this.cWidth / manager.gridWidth;
                this.frames.mainFrame.resizeFrame(0, (this.cHeight - manager.gridHeight * tileSize) / 2, manager.gridWidth * tileSize, manager.gridHeight * tileSize);
            }
        }
    };
    animateShape = (num, state) => {
        this.frames.mainFrame
            .animateShape(num, state ? state : AnimationState.lightening);
    };
}
//# sourceMappingURL=drawingapp.js.map