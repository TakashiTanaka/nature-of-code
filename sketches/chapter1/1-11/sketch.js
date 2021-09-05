// マウスに向かって加速するムーバーの一群
let movers = [];

function setup() {
	createCanvas(640, 360);
	for (let i = 0; i < 20; i++) {
		movers.push(new Mover());
	}
}

function draw() {
	background(200);

	movers.forEach((mover) => {
		mover.update();
		mover.checkEdges();
		mover.display();
	})
}

class Mover {
	constructor() {
		this.loc = createVector(random(width), random(height));
		this.velo = createVector(0, 0);
		this.topSpeed = 10;
	}
	update() {
		this.mouse = createVector(mouseX, mouseY); // マウス位置
		this.dir = p5.Vector.sub(this.mouse, this.loc); // マウス位置から現在位置を引いたベクトル
		this.dir.normalize(); // 正規化
		this.dir.mult(0.5); // スケーリング
		this.acc = this.dir; // 加速度に設定

		this.velo.add(this.acc);
		this.velo.limit(this.topSpeed);
		this.loc.add(this.velo);
	}
	display() {
		noStroke();
		fill(255, 0, 0, 80);
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