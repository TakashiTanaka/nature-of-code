// 流体抵抗
let movers = [];
let gravity, liquid;

function setup() {
	createCanvas(640, 360);
	for (let i = 0; i < 20; i++) {
		movers.push(new Mover(random(0.1, 5), random(0, width), 0));
	}
	mover = new Mover();
	liquid = new Liquid(0, height / 2, width, height / 2, 0.1);
}

function draw() {
	background(200);
	liquid.display();
	movers.forEach(mover => {
		if (liquid.contains(mover)) {
			let dragForce = liquid.drag(mover);
			mover.applyForce(dragForce);
		}
		gravity = createVector(0, 0.1 * mover.mass); // 重力
		mover.applyForce(gravity); // 重力をmoverに加える
		mover.update();
		mover.checkEdges();
		mover.display();
	});
}

class Liquid {
	constructor(x, y, w, h, c) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.c = c;
	}
	contains(mover) {
		let l = mover.loc;
		return l.x > this.x && l.x < this.x + this.w && l.y > this.y && l.y < this.y + this.h;
	}
	drag(mover) {
		let speed = mover.velo.mag();
		let dragMag = this.c * speed * speed;
		let dragForce = mover.velo.copy();
		dragForce.mult(-1);

		dragForce.normalize();
		dragForce.mult(dragMag);
		return dragForce;
	}
	display() {
		noStroke();
		fill(175);
		rect(this.x, this.y, this.w, this.h);
	}
}

class Mover {
	constructor(mass, x, y) {
		this.loc = createVector(x, y);
		this.velo = createVector(0, 0);
		this.acc = createVector(0, 0);
		this.mass = mass; // 質量は1に
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