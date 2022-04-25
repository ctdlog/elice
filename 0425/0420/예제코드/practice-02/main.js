// 현재 페이지 파일명 출력
let pageInfo = document.getElementById("page-info");
let pathNameArr = window.location.pathname.split("/");
let fileName = pathNameArr[pathNameArr.length - 1];
pageInfo.innerHTML = `현재 페이지는 "${fileName}"입니다.`;

// 배경색 변경 버튼
let bgChangeBtn = document.getElementById("bg-change-btn");
bgChangeBtn.onclick = function () {
    let isOk = window.confirm("배경색을 변경하시겠습니까?");
    // 확인 버튼 클릭 시
    if (isOk) {
        document.body.style.backgroundColor = "brown";
        // 적용되기 전에 알람이 뜨니,
        // 약간 딜레이를 준다.
        setTimeout(function() {
            window.alert("성공적으로 변경했습니다.");
        }, 100);
    }
}

// 새로고침 버튼
let refreshBtn = document.getElementById("refresh-btn");
refreshBtn.onclick = function () {
    location.reload();
}

// 히스토리 개수 출력
let pageHistory = document.getElementById("page-history");
pageHistory.innerHTML = `현재 페이지 히스토리는 "${window.history.length}"개 있습니다.`;

// 페이지 이동 (href)
let moveHrefBtns = document.getElementsByClassName("move-href-btn");
for (let i = 0; i < moveHrefBtns.length; i ++) {
    moveHrefBtns[i].onclick = function () {
        window.location.href = `page${this.getAttribute("page")}.html`;
    }
}

// 페이지 이동 (replace)
let moveReplaceBtns = document.getElementsByClassName("move-replace-btn");
for (let i = 0; i < moveReplaceBtns.length; i ++) {
    moveReplaceBtns[i].onclick = function () {
        window.location.replace(`page${this.getAttribute("page")}.html`);
    }
}

// 뒤로가기 (back)
let backBtn = document.getElementById("back-btn");
backBtn.onclick = function () {
    window.history.back();
}

// 뒤로가기 (go)
let prevGoBtn = document.getElementById("prev-go-btn");
prevGoBtn.onclick = function () {
    window.history.go(-1);
}

// 앞으로가기 (go)
let nextGoBtn = document.getElementById("next-go-btn");
nextGoBtn.onclick = function () {
    window.history.go(1);
}
