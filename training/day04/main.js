// 1. carrot 버튼 요소를 가져오기
let carrot_btn = document.getElementById("carrot");
let apple_btn = document.getElementById("apple");
let banana_btn = document.getElementById("banana");
let onion_btn = document.getElementById("onion");
let textArea = document.getElementById("text");

// 2. 화면에 텍스트 출력하는 기능 구현
function showText() {
  textArea.innerHTML = "토끼가 나타났어요!";
}

// 3. eventListener 등록
carrot_btn.addEventListener("click", showText);
