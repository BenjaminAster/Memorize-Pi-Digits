// import {DrawingApp} from "./drawingapp";

enum MemorizationState {
	start,
	memorization,
	memorizationInput,
	gameOver,
}

class Manager {

	private drawingApp: DrawingApp;

	public gridWidth = 3;
	public gridHeight = 4;

	private piDigits: string = "";

	private crrStartDigit: number = 0;
	private crrEndDigit: number;
	private crrDigit: number = this.crrStartDigit;

	private sounds: Array<Sound> = new Array<Sound>();

	private memorizationState: MemorizationState = MemorizationState.start;

	constructor() {
		this.drawingApp = new DrawingApp();

		// $.get("pi-digits.txt", (data: string): void => {
		// 	this.piDigits = data.replaceAll(/\s/g, "");

		// 	this.startMemorization();
		// });

		(async () => {
			const data = await (await window.fetch("./pi-digits.txt")).text()
			this.piDigits = data.replaceAll(/\s/g, "");

			this.startMemorization();
		})();


		document.addEventListener("keydown", (e): void => {
			let key: number = parseInt(e.key);
			if (!isNaN(key) &&
				this.memorizationState === MemorizationState.memorizationInput) {
				this.handleMemorizationInput(key);
			}
		});

		this.crrEndDigit = window.parseInt(
			window.localStorage.getItem("crrEndDigit") as string
		);
		if (isNaN(this.crrEndDigit)) {
			this.crrEndDigit = this.crrStartDigit + 1;
		}

		// for (let i = 0; i < 10; i++) {

		// 	this.sounds.push(new Sound(i));
		// }
	}

	private startMemorization = (): void => {
		this.memorizationState = MemorizationState.memorization;

		this.crrDigit = this.crrStartDigit;


		setTimeout(this.nextShape, 1000);
	}

	private nextShape = (): void => {
		this.drawingApp.animateShape(
			parseInt(this.piDigits[this.crrDigit])
		);

		// this.sounds[parseInt(this.piDigits[this.crrDigit])]?.start();
		this.sounds.push(new Sound(
			window.parseInt(this.piDigits[this.crrDigit])
		));

		window.setTimeout(() => this.sounds.shift(), 2000);

		this.crrDigit++;
		if (this.crrDigit >= this.crrEndDigit) {
			setTimeout(this.startMemorizationInput, 1000);
		} else {
			setTimeout(this.nextShape, 600);
		}
	}

	private startMemorizationInput = (): void => {
		this.memorizationState = MemorizationState.memorizationInput;

		this.crrDigit = this.crrStartDigit;

	}

	private handleMemorizationInput = (key: number): void => {
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
		} else {
			this.memorizationState = MemorizationState.gameOver;

			// window.alert("Game Over. Restarting...");
			console.log("%cGame Over! Restarting...", "font-size: 2em; background: black; color: white;");
			window.setTimeout(() => console.clear(), 1000);

			window.setTimeout(this.startMemorization, 1000);
		}

	}

}

