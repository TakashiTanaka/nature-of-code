// 50%の確率でマウスの方向に進むランダム・ウォーカー

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
		if (r < 0.5) {
			let dx = mouseX - this.x;
			let dy = mouseY - this.y;
			this.x += !isNaN(dx / abs(dx)) ? dx / abs(dx) : 0;
			this.y += !isNaN(dy / abs(dy)) ? dy / abs(dy) : 0;
		} else if (r < 0.625) {
			this.x++;
		} else if (r < 0.75) {
			this.y++;
		} else if (r < 0.875) {
			this.x--;
		} else {
			this.y--;
		}
	}
}