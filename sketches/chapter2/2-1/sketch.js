// 力
let mover;
let wind, gravity;

function setup() {
	createCanvas(640, 360);
	mover = new Mover();
	wind = createVector(0.1, 0); // 風力
	gravity = createVector(0, 0.1); // 重力
}

function draw() {
	background(200);
	mover.applyForce(wind); // 風力をmoverに加える
	mover.applyForce(gravity); // 重力をmoverに加える
	mover.update();
	mover.checkEdges();
	mover.display();
}

class Mover {
	constructor() {
		this.loc = createVector(30, 30);
		this.velo = createVector(0, 0);
		this.acc = createVector(0, 0);
		this.mass = 2; // 質量は1に
	}
	applyForce(force) {
		this.f = p5.Vector.div(force, this.mass);
		this.acc.add(this.f);
	}
	update() {
		this.velo.add(this.acc);
		this.loc.add(this.velo);
		this.acc.mult(0); // 加速を毎回クリアにする
	}
	display() {
		noStroke();
		fill(255, 0, 0, 80);
		ellipse(this.loc.x, this.loc.y, this.mass * 16);
	}
	checkEdges() {
		if (this.loc.x > width) {
			this.loc.x = width;
			this.velo.x *= -1;
		} else if (this.loc.x < 0) {
			this.loc.x = 0;
			this.velo.x *= -1;
		}
		if (this.loc.y > height) {
			this.velo.y *= -1;
			this.loc.y = height;
		}
	}
}