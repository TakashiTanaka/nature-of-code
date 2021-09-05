// 下および右方向に進む傾向を持ったランダム・ウォーカー

let walker;

const drawFrame = () => {
	noFill();
	stroke(0);
	rect(0, 0, 640, 360);
}

function setup() {
	createCanvas(640, 360);
	background(255);
	walker = new Walker();
}

function draw() {
	drawFrame();
	walker.step();
	walker.display();
}

class Walker {
	constructor() {
		this.x = width / 2;
		this.y = height / 2;
	}
	display() {
		stroke(0);
		point(this.x, this.y);
	}
	step() {
		let r = random(1);
		if (r < 0.3) {
			this.x++; // 右に30%
		} else if (r < 0.6) {
			this.y++; // 下に30%
		} else if (r < 0.8) {
			this.x--; // 左に20%
		} else {
			this.y--; // 上に20%
		}
	}
}