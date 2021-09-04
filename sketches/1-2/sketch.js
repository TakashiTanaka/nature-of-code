// フレーム更新毎にランダムに選ばれたrandomCounts配列のキーの値がインクリメントされる
// 結果を見ると、random関数は数値を均等に生成することがわかる

let randomCounts = [];
let total = 20;

function setup() {
	createCanvas(640, 360);
	background(255);
	for (let i = 0; i < total; i++) {
		randomCounts[i] = 0;
	}
}

function draw() {
	background(200);
	let index = int(random(randomCounts.length));
	randomCounts[index]++;
	stroke(0);
	fill(175);
	let w = width / randomCounts.length;
	randomCounts.forEach((_, x) => {
		rect(x * w, height - randomCounts[x], w, randomCounts[x]);
	});
}