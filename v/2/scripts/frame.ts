class Frame {

	protected fX: number = 0;
	protected fY: number = 0;

	protected fWidth: number = 0;
	protected fHeight: number = 0;

	constructor() {

	}

	public resize = (
		frameX: number,
		frameY: number,
		frameWidth: number,
		frameHeight: number
	): void => {
		this.fX = frameX;
		this.fY = frameY;
		this.fWidth = frameWidth;
		this.fHeight = frameHeight;
	}

	// public draw = () => {
	// 	console.log("drawing in Frame");
	// }


	public draw = () => { };
}

