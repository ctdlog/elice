function handleClick() {
    alert("click!");
}

let ex2 = document.getElementById("ex2");
ex2.onclick = function () {
    handleClick();
}
ex2.onclick = function () {
    handleClick();
}

let ex3 = document.getElementById("ex3");
ex3.addEventListener("click", function () {
    handleClick();
});
ex3.addEventListener("click", function () {
    handleClick();
});