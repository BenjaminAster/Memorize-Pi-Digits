"use strict";
class Frame {
    constructor() {
        this.fX = 0;
        this.fY = 0;
        this.fWidth = 0;
        this.fHeight = 0;
        this.resize = (frameX, frameY, frameWidth, frameHeight) => {
            this.fX = frameX;
            this.fY = frameY;
            this.fWidth = frameWidth;
            this.fHeight = frameHeight;
        };
        // public draw = () => {
        // 	console.log("drawing in Frame");
        // }
        this.draw = () => { };
    }
}
//# sourceMappingURL=frame.js.map