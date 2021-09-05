// ベクトルの正規化

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(200);
	let mouse = createVector(mouseX, mouseY);
	let center = createVector(width / 2, height / 2);
	mouse.sub(center);

	mouse.normalize();

	mouse.mult(50); // 正規化したあと、画面上で見えるように50を掛けている

	// 正規化しているため、ベクトルの大きさは常に50
	text(`ベクトルの大きさ：${mouse.mag()}`, 10, 20);

	translate(width / 2, height / 2);
	line(0, 0, mouse.x, mouse.y);
}