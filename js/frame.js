"use strict";
class Frame {
    constructor() {
        this.fX = 0;
        this.fY = 0;
        this.fWidth = 0;
        this.fHeight = 0;
        this.resizeFrame = (frameX, frameY, frameWidth, frameHeight) => {
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
        this.getOffset = () => {
            return {
                x: this.fX,
                y: this.fY,
            };
        };
        this.resize = () => { };
        // public draw = () => {
        // 	console.log("drawing in Frame");
        // }
        this.draw = (ctx) => { };
        console.log("new Frame");
    }
}
//# sourceMappingURL=frame.js.map