// import { shapeDefinitions } from "./shapedefinitions";
class MainFrame extends Frame {
    tiles = new Array();
    tileSize = 0;
    highlighter = {
        x: 0,
        y: 0,
        prevX: 0,
        prevY: 0,
        prevNumMillis: performance.now(),
        animationVal: 0
    };
    constructor() {
        super();
        // this.tiles.push(new Tile(2, 1, 2, "paleGreen", [
        // 	{ arc: false, x: -1, y: -1 },
        // 	{ arc: false, x: -1, y: 1 },
        // 	{ arc: false, x: 1, y: 1 },
        // 	{ arc: false, x: 1, y: -1 },
        // ]));
        // this.tiles.push(new Tile(4, 0, 1, "paleTurquoise", [
        // 	{ arc: false, x: -1, y: -1 },
        // 	{ arc: false, x: 0, y: -1 },
        // 	{ arc: true, x: 1, y: -1, r: 1 },
        // 	{ arc: false, x: 1, y: 0 },
        // 	{ arc: true, x: 1, y: 1, r: 1 },
        // 	{ arc: false, x: 0, y: 1 },
        // 	{ arc: false, x: -1, y: 1 },
        // ]));
        this.createShapes();
        this.resize();
        console.log("new MainFrame");
    }
    draw = (ctx) => {
        // console.log("drawing in MainFrame");
        ctx.fillStyle = "#1a1b1e";
        ctx.fillRect(0, 0, this.fWidth, this.fHeight);
        ctx.fillStyle = "#242528";
        for (let row = 0; row < manager.gridHeight; row++) {
            for (let clm = 0; clm < manager.gridWidth; clm++) {
                if ((row + clm) % 2) {
                    ctx.fillRect(clm * this.tileSize, row * this.tileSize, this.tileSize, this.tileSize);
                }
            }
        }
        this.drawHighlighter(ctx);
        this.tiles.forEach((item) => item.draw(ctx));
    };
    resize = () => {
        this.tileSize = this.fWidth / manager.gridWidth;
        this.tiles.forEach((item) => item.resize(this.fWidth, this.fHeight));
        // console.log("resizing mainFrame");
    };
    drawHighlighter = (ctx) => {
        this.highlighter.animationVal = (performance.now() - this.highlighter.prevNumMillis) / 200;
        if (this.highlighter.animationVal >= 1) {
            this.highlighter.animationVal = 1;
        }
        function lerp(start, stop, amount) {
            return amount * (stop - start) + start;
        }
        let coolAnimationVal = .5 - Math.cos(this.highlighter.animationVal * Math.PI) / 2;
        // console.log(lerp(200, 300, .9));
        // let 
        let x1 = (lerp(this.highlighter.prevX, this.highlighter.x, coolAnimationVal)) * this.tileSize;
        let y1 = (lerp(this.highlighter.prevY, this.highlighter.y, coolAnimationVal)) * this.tileSize;
        let x2 = (lerp(this.highlighter.prevX, this.highlighter.x, coolAnimationVal) + 1) * this.tileSize;
        let y2 = (lerp(this.highlighter.prevY, this.highlighter.y, coolAnimationVal) + 1) * this.tileSize;
        ctx.fillStyle = "#444548";
        ctx.globalAlpha = 1;
        let radius = this.tileSize / 6;
        ctx.beginPath();
        ctx.moveTo(x2 - radius, y1);
        ctx.arcTo(x2, y1, x2, y2, radius);
        ctx.arcTo(x2, y2, x1, y2, radius);
        ctx.arcTo(x1, y2, x1, y1, radius);
        ctx.arcTo(x1, y1, x2, y1, radius);
        ctx.closePath();
        ctx.fill();
        // console.log("drawing highlighter");
    };
    createShapes = () => {
        let shapes = shapeDefinitions;
        shapes.forEach((item, index) => {
            this.tiles.push(new Tile(item.num, item.gridX, item.gridY, item.color, item.nodeList, item.offsetY, item.scale));
        });
    };
    animateShape = (num, state) => {
        this.tiles[num].animateShape(state);
        this.highlighter.prevX = this.highlighter.x;
        this.highlighter.prevY = this.highlighter.y;
        let highlighterXY = this.tiles[num].getXY();
        this.highlighter.x = highlighterXY.x;
        this.highlighter.y = highlighterXY.y;
        this.highlighter.prevNumMillis = performance.now();
        this.highlighter.animationVal = 0;
    };
}
// Constrain:
// Math.max(Math.min(n, high), low);
//# sourceMappingURL=mainframe.js.map