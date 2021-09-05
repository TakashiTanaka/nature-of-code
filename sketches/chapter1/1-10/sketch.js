// マウスに向かう加速度

let mover;

function setup() {
	createCanvas(640, 360);
	mover = new Mover();
}

function draw() {
	background(200);

	mover.update();
	mover.checkEdges();
	mover.display();

}

class Mover {
	constructor() {
		this.loc = createVector(width / 2, height / 2);
		this.velo = createVector(0, 0);
		this.topSpeed = 10;
	}
	update() {
		this.mouse = createVector(mouseX, mouseY);
		this.dir = p5.Vector.sub(this.mouse, this.loc);
		this.dir.normalize();
		this.dir.mult(0.5);
		this.acc = this.dir;
		this.velo.add(this.acc);
		this.velo.limit(this.topSpeed);
		this.loc.add(this.velo);
	}
	display() {
		stroke(0);
		fill(175);
		ellipse(this.loc.x, this.loc.y, 30);
	}
	checkEdges() {
		if (this.loc.x > width) {
			this.loc.x = 0;
		} else if (this.loc.x < 0) {
			this.loc.x = width;
		}
		if (this.loc.y > height) {
			this.loc.y = 0;
		} else if (this.loc.y < 0) {
			this.loc.y = height;
		}
	}
}