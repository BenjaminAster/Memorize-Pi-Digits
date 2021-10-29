class Sound {

	private frequency: number;
	// private amplitude: number;
	private audioCtx: AudioContext;
	private oscillator: OscillatorNode;
	private gain: GainNode;
	private num: number;
	private maxAmplitude: number;

	private prevMillis: number = performance.now();

	constructor(num: number) {
		this.num = num;

		this.maxAmplitude = .03;


		// var attack = 0.002;
		// if (i <= sampleRate * attack) {
		// 	// Linear build-up, fast.
		// 	curVol = volume * (i / (sampleRate * attack));
		// }




		// this.frequency = Math.pow(1.03, num) * 500 - 300;
		this.frequency = Math.pow(1.06, num) * 300 + 50;


		// this.frequency = 100;

		const context = new AudioContext();
		const oscillator = context.createOscillator();
		const gain = context.createGain();
		// const getTime = (time: number): number => context.currentTime + time;

		// console.log({ oscillator });
		let amplitude = 0;

		// // oscillator.type = "custom";
		// const real: number[] = [];
		// // const imag = [3, 2, 2, 2, -2, -2, -3];
		// const imag = [0, -1, 2, -2, 0, -3, 3, -3, -2, -3,]
		// for (let i in imag) {
		// 	real.push(window.parseInt(i));
		// }

		// const wave = context.createPeriodicWave(real, imag, {
		// 	disableNormalization: true,
		// });
		// oscillator.setPeriodicWave(wave,);

		oscillator.type = "sine";
		oscillator.frequency.value = this.frequency;
		gain.gain.value = amplitude;

		oscillator.connect(gain);
		gain.connect(context.destination);

		this.audioCtx = context;
		this.oscillator = oscillator;
		this.gain = gain;

		window.setTimeout(this.start);
	}

	public start = (): void => {
		// this.gain.gain.value = .01;

		this.oscillator.start();

		this.prevMillis = performance.now();

		window.setTimeout(this.louder);

		// console.log(this.num, this.gain.gain.value, "STARTING...");

		// console.log(this.num, {
		// 	frequency: this.frequency,
		// 	amplitude: this.amplitude,

		// });
	}

	public louder = (): void => {
		this.gain.gain.value +=
			(performance.now() - this.prevMillis) * this.maxAmplitude / 50;

		this.prevMillis = performance.now();

		// console.log(this.num, this.gain.gain.value);

		window.setTimeout(
			(this.gain.gain.value >= this.maxAmplitude) ? this.quieter : this.louder
		);

	}

	public quieter = (): void => {
		this.gain.gain.value -=
			(performance.now() - this.prevMillis) * this.maxAmplitude / 300;


		this.prevMillis = performance.now();

		// console.log(this.num, this.gain.gain.value);

		if (this.gain.gain.value <= 0) {
			this.stop();
		} else {
			window.setTimeout(this.quieter);
		}

	}

	public stop = (): void => {
		// console.log(this.num, this.gain.gain.value, "STOPPING...");

		this.oscillator.stop();


		//  this;
	}
}

