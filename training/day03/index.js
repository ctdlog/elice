const arr = [1, 2, 3];

arr[0] = 50;
console.log(arr); // 변경되어서 정상적으로 출력된다.

const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a == b); // 주소값이 다르기 때문에 false

let c = 10;
let d = "10";

console.log(c === d); // false (데이터 타입까지 비교)

let e = "10";
let f = 15;

console.log(a + b); // 1015

console.log([] == 0); // true
console.log([] == "0"); // false
