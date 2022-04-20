let bgChangeBtn = window.document.getElementById("bg-change-btn");
bgChangeBtn.addEventListener("click", function () {
  let isOk = window.confirm("배경색을 바꾸시겠습니까?");

  // boolean : true / false
  if (isOk) {
    document.querySelector("body").style.backgroundColor = "brown";
  }
});

let newWindow;

let newWindowBtn = window.document.getElementById("new-window-btn");
newWindowBtn.addEventListener("click", function () {
  newWindow = window.open(
    "new_window.html",
    "새로운 창",
    "width=500, height=300"
  );
});

let windowCloseBtn = window.document.getElementById("window-close-btn");
windowCloseBtn.addEventListener("click", function () {
  newWindow.close();
});

let windowResizeBtn = window.document.getElementById("window-resize-btn");
windowResizeBtn.addEventListener("click", function () {
  newWindow.resizeTo(1000, 1000);
});

let windowSizeIncreaseBtn = window.document.getElementById(
  "window-size-increase-btn"
);
windowSizeIncreaseBtn.addEventListener("click", function () {
  newWindow.resizeBy(100, 100);
});

let windowSizeReduceBtn = window.document.getElementById(
  "window-size-reduce-btn"
);
windowSizeReduceBtn.addEventListener("click", function () {
  newWindow.resizeBy(-100, -100);
});

let windowScrollTopBtn = window.document.getElementById(
  "window-scroll-top-btn"
);
windowScrollTopBtn.addEventListener("click", function () {
  newWindow.scrollTo(0, 0);
});

let windowScrollDownBtn = window.document.getElementById(
  "window-scroll-down-btn"
);
windowScrollDownBtn.addEventListener("click", function () {
  newWindow.scrollBy(0, 10);
});

let windowScrollUpBtn = window.document.getElementById("window-scroll-up-btn");
windowScrollUpBtn.addEventListener("click", function () {
  newWindow.scrollBy(0, -10);
});
