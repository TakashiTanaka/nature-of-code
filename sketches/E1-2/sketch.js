// 複数の事象が連続して発生する確率は、各事象の確率を乗算すればわかる
// 52枚のトランプからエースを続けて2回引く確率
let totalNum = 52;
let aceNum = 4;
let drawCount = 2;
console.log((aceNum / totalNum) * drawCount);