let ex1 = document.getElementById("ex1");
console.log(ex1);

let ex2 = document.getElementsByClassName("sub");
console.log(ex2);

let ex3 = document.getElementsByTagName("div");
console.log(ex3);

let ex4 = document.getElementsByName("checkOption");
console.log(ex4);

// CSS Selector를 사용해서 노드 선택
let ex5 = document.querySelector("#ex5");
console.log(ex5);

let ex6 = document.querySelectorAll("div.sub");
console.log(ex6);

// 새로운 요소 추가
let ex7 = document.querySelector("#ex7");

let newElem = document.createElement("div");
let newText = document.createTextNode("안녕하세요?");

newElem.appendChild(newText); // 자식 노드로 텍스트 노드를 추가
ex7.appendChild(newElem); // ex1 요소 아래에 새로 만든 div 요소를 추가

let ex8 = document.getElementById("ex8");
ex8.setAttribute("value", "값을 수정합니다.");
// ex8.removeAttribute("value");
ex8.innerHTML = "<h1>안녕하세요?</h1>";
ex8.style.color = "blue";
console.log(ex8.innerText);
console.log(ex8.innerHTML);
