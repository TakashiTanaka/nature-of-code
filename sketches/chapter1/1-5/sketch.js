// パーリンノイズウォーカー

let walker;

function setup() {
	createCanvas(windowWidth, windowHeight);
	walker = new Walker();
	for (let i = 0; i < 10000; i++) {
		walker.step();
		walker.display();
	}
}

class Walker {
	constructor() {
		this.x;
		this.y;
		this.size;
		this.tx = 0;
		this.ty = 10000;
		this.ts = 20000;
	}
	step() {
		this.x = map(noise(this.tx), 0, 1, 0, width);
		this.y = map(noise(this.ty), 0, 1, 0, height);
		this.size = map(noise(this.ts), 0, 1, 10, 200);
		this.tx += 0.01;
		this.ty += 0.01;
		this.ts += 0.01;
	}
	display() {
		stroke(0, 80);
		ellipse(this.x, this.y, this.size);
	}
}