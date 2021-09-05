// ガウス分布
// randomGaussianを使って乱数を作ってxの値に割り当てる
// randomGaussianについてはhttps://qiita.com/bit0101/items/b4c13688315eca369fb2

const drawFrame = () => {
	noFill();
	stroke(0);
	rect(0, 0, 640, 360);
}

function setup() {
	createCanvas(640, 360);
}

function draw() {
	drawFrame();
	noStroke();
	fill(0, 10);
	let x = randomGaussian(320, 60);
	ellipse(x, 180, 16);
}