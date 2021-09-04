// x,yとも-1,1の間のいずれかに進む
// この1-1のランダムウォークは進む方向の確率が常に同じである

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
		stroke(0); 1
		point(this.x, this.y);
	}
	step() {
		let stepX = random(-1, 1);
		let stepY = random(-1, 1);
		this.x += stepX;
		this.y += stepY;
	}
}