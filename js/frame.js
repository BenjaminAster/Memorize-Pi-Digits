class Frame {
    fX = 0;
    fY = 0;
    fWidth = 0;
    fHeight = 0;
    constructor() {
        console.log("new Frame");
    }
    resizeFrame = (frameX, frameY, frameWidth, frameHeight) => {
        // console.log("resizing frame");
        this.fX = frameX;
        this.fY = frameY;
        this.fWidth = frameWidth;
        this.fHeight = frameHeight;
        this.resize();
    };
    // protected setOffset = (x: number, y: number): void => {
    // 	this.fX = x;
    // 	this.fY = y;
    // }
    getOffset = () => {
        return {
            x: this.fX,
            y: this.fY,
        };
    };
    resize = () => { };
    // public draw = () => {
    // 	console.log("drawing in Frame");
    // }
    draw = (ctx) => { };
}
//# sourceMappingURL=frame.js.map