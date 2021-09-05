// 上・下・左・右の4方向に進むランダムウォーカー

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
		let choice = int(random(4));
		if (choice === 0) {
			this.x++;
		} else if (choice === 1) {
			this.x--;
		} else if (choice === 2) {
			this.y++;
		} else {
			this.y--;
		}
	}
}