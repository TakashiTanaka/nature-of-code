// 速度とランダムな加速度

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
		this.acc = p5.Vector.random2D(); // ランダムな2次元ベクトルを生成
		this.acc.mult(random(2)); // 生成したベクトルをランダムな値でスケーリング
		this.velo.add(this.acc);
		this.velo.limit(this.topSpeed); // limitで速度制限する
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