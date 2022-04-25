let depth1 = document.getElementById("depth-1");
depth1.addEventListener("click", function () {
    alert("depth-1 (capturing)");
}, true)
depth1.addEventListener("click", function () {
    alert("depth-1 (bubbling)");
})

let depth2 = document.getElementById("depth-2");
depth2.addEventListener("click", function () {
    alert("depth-2 (capturing)");
}, true)
depth2.addEventListener("click", function () {
    alert("depth-2 (bubbling)");
})

let depth3 = document.getElementById("depth-3");
depth3.addEventListener("click", function () {
    alert("depth-3 (capturing)");
}, true)
depth3.addEventListener("click", function () {
    alert("depth-3 (bubbling)");
})