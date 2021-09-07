// 重力（多数のmover）
// 重力の公式　F=(G*m1*m2/rの2乗)*r

let movers = [];
let attractor;

function setup() {
	createCanvas(640, 360);
	for (let i = 0; i < 100; i++) {
		movers.push(new Mover(random(0, width), random(0, height), random(1, 5)));
	}
	attractor = new Attractor();
}

function draw() {
	background(200);

	attractor.display();

	movers.forEach(mover => {
		let f = attractor.attract(mover);

		mover.applyForce(f);
		mover.update();
		mover.display();
	});
}

class Attractor {
	constructor() {
		this.mass = 20;
		this.loc = createVector(width / 2, height / 2);
		this.G = 0.4;
	}
	display() {
		stroke(0);
		fill(175, 200);
		ellipse(this.loc.x, this.loc.y, this.mass * 2);
	}
	attract(mover) {
		let force = p5.Vector.sub(this.loc, mover.loc);
		let distance = force.mag();
		distance = constrain(distance, 5.0, 25.0);
		force.normalize();
		let strength = (this.G * this.mass * mover.mass) / (distance * distance);
		force.mult(strength);
		return force;

	}
}

class Mover {
	constructor(x, y, m) {
		this.loc = createVector(x, y);
		this.velo = createVector(0, 0);
		this.acc = createVector(0, 0);
		this.mass = m; // 質量は1に
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