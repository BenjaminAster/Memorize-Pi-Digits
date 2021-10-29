// import {DrawingApp} from "./drawingapp";
var MemorizationState;
(function (MemorizationState) {
    MemorizationState[MemorizationState["start"] = 0] = "start";
    MemorizationState[MemorizationState["memorization"] = 1] = "memorization";
    MemorizationState[MemorizationState["memorizationInput"] = 2] = "memorizationInput";
    MemorizationState[MemorizationState["gameOver"] = 3] = "gameOver";
})(MemorizationState || (MemorizationState = {}));
class Manager {
    drawingApp;
    gridWidth = 3;
    gridHeight = 4;
    piDigits = "";
    crrStartDigit = 0;
    crrEndDigit;
    crrDigit = this.crrStartDigit;
    sounds = new Array();
    memorizationState = MemorizationState.start;
    constructor() {
        this.drawingApp = new DrawingApp();
        // $.get("pi-digits.txt", (data: string): void => {
        // 	this.piDigits = data.replaceAll(/\s/g, "");
        // 	this.startMemorization();
        // });
        (async () => {
            const data = await (await window.fetch("./pi-digits.txt")).text();
            this.piDigits = data.replaceAll(/\s/g, "");
            this.startMemorization();
        })();
        document.addEventListener("keydown", (e) => {
            let key = parseInt(e.key);
            if (!isNaN(key) &&
                this.memorizationState === MemorizationState.memorizationInput) {
                this.handleMemorizationInput(key);
            }
        });
        this.crrEndDigit = window.parseInt(window.localStorage.getItem("crrEndDigit"));
        if (isNaN(this.crrEndDigit)) {
            this.crrEndDigit = this.crrStartDigit + 1;
        }
        // for (let i = 0; i < 10; i++) {
        // 	this.sounds.push(new Sound(i));
        // }
    }
    startMemorization = () => {
        this.memorizationState = MemorizationState.memorization;
        this.crrDigit = this.crrStartDigit;
        setTimeout(this.nextShape, 1000);
    };
    nextShape = () => {
        this.drawingApp.animateShape(parseInt(this.piDigits[this.crrDigit]));
        // this.sounds[parseInt(this.piDigits[this.crrDigit])]?.start();
        this.sounds.push(new Sound(window.parseInt(this.piDigits[this.crrDigit])));
        window.setTimeout(() => this.sounds.shift(), 2000);
        this.crrDigit++;
        if (this.crrDigit >= this.crrEndDigit) {
            setTimeout(this.startMemorizationInput, 1000);
        }
        else {
            setTimeout(this.nextShape, 600);
        }
    };
    startMemorizationInput = () => {
        this.memorizationState = MemorizationState.memorizationInput;
        this.crrDigit = this.crrStartDigit;
    };
    handleMemorizationInput = (key) => {
        this.drawingApp.animateShape(key);
        this.sounds.push(new Sound(key));
        window.setTimeout(() => this.sounds.shift(), 2000);
        if (key === parseInt(this.piDigits[this.crrDigit])) {
            this.crrDigit++;
            if (this.crrDigit >= this.crrEndDigit) {
                this.crrEndDigit++;
                window.localStorage.setItem("crrEndDigit", this.crrEndDigit.toString());
                setTimeout(this.startMemorization, 1000);
            }
        }
        else {
            this.memorizationState = MemorizationState.gameOver;
            // window.alert("Game Over. Restarting...");
            console.log("%cGame Over! Restarting...", "font-size: 2em; background: black; color: white;");
            window.setTimeout(() => console.clear(), 1000);
            window.setTimeout(this.startMemorization, 1000);
        }
    };
}
//# sourceMappingURL=manager.js.map