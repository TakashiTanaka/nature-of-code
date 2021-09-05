// ガウス分布
// randomGaussianを使って乱数を作ってxの値に割り当てる
// randomGaussianについてはhttps://qiita.com/bit0101/items/b4c13688315eca369fb2

const drawFrame = () => {
	noFill();
	stroke(0);
	rect(0, 0, 640, 360);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB);
}

function draw() {
	background(255);
	for (let i = 0; i < 10000; i++) {
		noStroke();
		fill(randomGaussian(180, 60), 70, 80, 1);
		let x = randomGaussian((windowWidth / 2), (windowWidth / 2) / 2);
		let y = randomGaussian((windowHeight / 2), (windowHeight / 2) / 2);
		ellipse(x, y, 5);
	}
}