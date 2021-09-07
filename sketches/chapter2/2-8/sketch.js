// 相互引力

let movers = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 200; i++) {
		movers.push(new Mover(random(0, width), random(0, height), random(1, 5)));
	}
}

function draw() {
	background(200);

	movers.forEach((moverSelf, i, movers) => {
		movers.forEach((moverOther, j) => {
			if (i != j) {
				let f = moverOther.attract(moverSelf);
				moverSelf.applyForce(f);
			}
		});
		moverSelf.update();
		moverSelf.display();
	});
}

class Mover {
	constructor(x, y, m) {
		this.loc = createVector(x, y);
		this.velo = createVector(0, 0);
		this.acc = createVector(0, 0);
		this.mass = m; // 質量は1に
		this.G = 0.5;
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