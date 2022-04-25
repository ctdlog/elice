// function hello(name) {
//     return `Hi, ${name}`;
// }

// const hello = (name) => {
//     return `Hi, ${name}`;
// }

const hello = name => `Hi, ${name}`;

console.log(hello("John"));


function printHello() {
    console.log(this);
}

const helloBtn = document.getElementById("hello");
helloBtn.onclick = printHello;
// helloBtn.onclick = () => {
//     console.log(this);
// };