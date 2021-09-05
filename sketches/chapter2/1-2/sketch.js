// バウンドするボール（ベクトルを使った場合）

let loc; // 位置
let velo // 速度

function setup() {
	createCanvas(640, 360);
	loc = createVector(100, 100);
	velo = createVector(5, 5);
}

function draw() {
	background(200);
	loc.add(velo);

	if ((loc.x > width) || (loc.x < 0)) {
		velo.x = velo.x * -1;
	}
	if ((loc.y > height) || (loc.y < 0)) {
		velo.y = velo.y * -1;
	}

	stroke(0);
	fill(0);
	ellipse(loc.x, loc.y, 16);
}