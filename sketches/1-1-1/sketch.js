// x,yとも-1, 0 ,1のいずれかに進む

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
		let stepX = int(random(3)) - 1;
		let stepY = int(random(3)) - 1;
		this.x += stepX;
		this.y += stepY;
	}
}