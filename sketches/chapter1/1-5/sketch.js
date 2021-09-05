// ベクトルの大きさ

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(200);
	let mouse = createVector(mouseX, mouseY);
	let center = createVector(width / 2, height / 2);
	mouse.sub(center);

	let m = mouse.mag(); // ベクトルの長さはmagで求める
	fill(0);
	rect(0, 0, m, 10);
	text(`ベクトルの長さ：${m}`, 10, 30);

	translate(width / 2, height / 2);
	line(0, 0, mouse.x, mouse.y);
}