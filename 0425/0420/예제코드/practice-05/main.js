$("#bg-change-btn").on("click", function () {
    let isOk = window.confirm("배경색을 변경하시겠습니까?");
    if (isOk) {
        document.body.style.backgroundColor = "brown";
        // 적용되기 전에 알람이 뜨니,
        // 약간 딜레이를 준다.
        setTimeout(function() {
            window.alert("성공적으로 변경했습니다.");
        }, 100);
    }
});

let newWindow;

// 새창 열기
$("#open-window-btn").on("click", function () {
    newWindow = window.open("window.html", "_blank", "width=300px, height=300px");
});

// 새창 닫기
$("#close-window-btn").on("click", function () {
    newWindow.close();
});

// 새창 크기를 고정크기로 변경하기
$("#resize-btn").on("click", function () {
    newWindow.resizeTo(500, 500);
});

// 새창 크기 키우기
$("#increase-size-btn").on("click", function () {
    newWindow.resizeBy(100, 100);
});

// 새창 크기 줄이기
$("#reduce-size-btn").on("click", function () {
    newWindow.resizeBy(-100, -100);
});

// 새창 스크롤 최상단으로 올리기
$("#scroll-top-btn").on("click", function () {
    newWindow.scrollTo(0, 0);
});

// 새창 스크롤 일부 내리기
$("#scroll-down-btn").on("click", function () {
    newWindow.scrollBy(0, 10);
});
