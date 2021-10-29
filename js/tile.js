"use strict";
var AnimationState;
(function (AnimationState) {
    AnimationState[AnimationState["dark"] = 0] = "dark";
    AnimationState[AnimationState["lightening"] = 1] = "lightening";
    AnimationState[AnimationState["light"] = 2] = "light";
    AnimationState[AnimationState["darkening"] = 3] = "darkening";
})(AnimationState || (AnimationState = {}));
class Tile {
    constructor(num, gridX, gridY, color, nodeList, offsetY, scale) {
        this.animationVal = 0;
        this.animationState = AnimationState.dark;
        this.prevMillis = performance.now();
        this.timeoutId = 0;
        this.tileSize = 0;
        this.shapeRadius = 0;
        this.draw = (ctx) => {
            ctx.fillStyle = ctx.strokeStyle = this.color;
            ctx.lineWidth = this.tileSize / 20;
            ctx.lineJoin = "round";
            ctx.beginPath();
            // ctx.moveTo(0, 0);
            this.nodeList.forEach((item, index) => {
                if (item.arc) {
                    ctx.arcTo((this.gridX + .5) * this.tileSize
                        + (item.x) * this.shapeRadius, (this.gridY + .5) * this.tileSize
                        + (item.y + this.offsetY) * this.shapeRadius, (this.gridX + .5) * this.tileSize + (this.nodeList[(index + 1) % this.nodeList.length].x) * this.shapeRadius, (this.gridY + .5) * this.tileSize + (this.nodeList[(index + 1) % this.nodeList.length].y + this.offsetY) * this.shapeRadius, item.r ? item.r * this.shapeRadius : 0);
                }
                else {
                    ctx.lineTo((this.gridX + .5) * this.tileSize
                        + (item.x) * this.shapeRadius, (this.gridY + .5) * this.tileSize
                        + (item.y + this.offsetY) * this.shapeRadius);
                }
            });
            // console.log(ctx.globalAlpha);
            ctx.closePath();
            // this.animationVal =
            // 	Math.max(
            // 		Math.min(
            // 			Math.abs((performance.now() / 500) % 4 - 2) - .5, 1,
            // 		), 0,
            // 	);
            let animationVals = {
                lighten: 100,
                light: 200,
                darken: 200,
            };
            if (this.animationState === AnimationState.lightening) {
                this.animationVal +=
                    (performance.now() - this.prevMillis) / animationVals.lighten;
                if (this.animationVal >= 1) {
                    this.animationVal = 1;
                    this.animationState = AnimationState.light;
                    this.timeoutId = window.setTimeout(() => this.animateShape(AnimationState.darkening), animationVals.light);
                }
            }
            else if (this.animationState === AnimationState.darkening) {
                this.animationVal -=
                    (performance.now() - this.prevMillis) / animationVals.darken;
                if (this.animationVal <= 0) {
                    this.animationVal = 0;
                    this.animationState = AnimationState.dark;
                }
            }
            ctx.globalAlpha = this.animationVal;
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.stroke();
            ctx.font = `bold ${this.tileSize * .4}px Arial, sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            if (this.animationVal < .5) {
                ctx.fillStyle = this.color;
                ctx.globalAlpha = 1 - this.animationVal * 2;
            }
            else {
                ctx.fillStyle = "#202124";
                ctx.globalAlpha = this.animationVal * 2 - 1;
            }
            ctx.fillText(this.num.toString(), (this.gridX + .5) * this.tileSize, (this.gridY + .53) * this.tileSize + this.offsetY * this.shapeRadius);
            this.prevMillis = performance.now();
        };
        this.resize = (fWidth, fHeight) => {
            this.tileSize = fWidth / manager.gridWidth;
            let globalScaling = .7;
            this.shapeRadius = this.tileSize * .5 * globalScaling * this.scale;
        };
        this.animateShape = (state) => {
            // if (state === AnimationState.darkening) {
            // 	this.animationState = AnimationState.darkening;
            // } else if (state === AnimationState.lightening) {
            // 	this.animationState = AnimationState.lightening;
            // }
            if (state === AnimationState.lightening
                && this.animationState !== AnimationState.dark) {
                this.animationVal = 0;
                window.clearTimeout(this.timeoutId);
            }
            this.animationState = state;
        };
        this.getXY = () => {
            return {
                x: this.gridX,
                y: this.gridY,
            };
        };
        this.num = num;
        this.gridX = gridX;
        this.gridY = gridY;
        this.color = color;
        this.offsetY = offsetY ? offsetY : 0;
        this.scale = scale ? scale : 1;
        this.nodeList = nodeList;
    }
}
//# sourceMappingURL=tile.js.map