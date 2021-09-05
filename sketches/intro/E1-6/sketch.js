// モンテカルロ法で生成した値をlineのyの高さにマッピングしてみる

let x, y;

const drawFrame = () => {
	noFill();
	stroke(0);
	rect(0, 0, 640, 360);
}

const montecarlo = () => {
	while (true) {
		let r1 = random(1);
		let prob = r1;
		let r2 = random(1);
		if (r2 < prob) {
			return r1;
		}
	}
}

let count = [];

function setup() {
	createCanvas(640, 360);

	// モンテカルロ法を使って生成したランダムな値を配列に格納
	for (let i = 0; i < width; i++) {
		let stepSize = int(montecarlo() * 5) * height / 5;
		count.push(stepSize);
	}

	// 配列をソート
	count.sort((a, b) => (a - b));

	// ソートした配列を順番に描画
	// ラインの高さにマッピングしている
	for (let i = 0; i < width; i++) {
		line(i, height, i, count[i]);
	}

	let test = count.filter((x, i, self) => self.indexOf(x) === i);
	console.log(test);

}

function draw() {
	drawFrame();
}