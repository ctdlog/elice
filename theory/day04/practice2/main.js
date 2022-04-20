let pageName = window.document.getElementById("page-name");

let pathArr = window.location.pathname.split("/");
pageName.innerHTML = pathArr[pathArr.length - 1];

let bgChangeBtn = window.document.getElementById("bg-change-btn");
bgChangeBtn.addEventListener("click", function () {
  let isOk = window.confirm("배경색을 바꾸시겠습니까?");

  // boolean : true / false
  if (isOk) {
    document.querySelector("body").style.backgroundColor = "brown";
  }
});

let refreshBtn = window.document.getElementById("refresh-btn");
refreshBtn.addEventListener("click", () => {
  window.location.reload();
});

// 히스토리 길이를 표시
let histoeyLen = window.document.getElementById("history-length");
histoeyLen.innerHTML = `${window.history.length}`;

let pageHrefBtns = window.document.getElementsByClassName("move-page-href-btn");
for (let i = 0; i < pageHrefBtns.length; i++) {
  pageHrefBtns[i].onclick = () => {
    let pageNum = pageHrefBtns[i].getAttribute("page");
    window.location.href = `page${pageNum}.html`;
  };
}

let pageReplaceBtns = window.document.getElementsByClassName(
  "move-page-replace-btn"
);
for (let i = 0; i < pageReplaceBtns.length; i++) {
  pageReplaceBtns[i].onclick = () => {
    let pageNum = pageReplaceBtns[i].getAttribute("page");
    window.location.replace(`page${pageNum}.html`);
  };
}

let backBtn = window.document.getElementById("back-btn");
backBtn.onclick = () => {
  window.history.back();
};

let prevGoBtn = window.document.getElementById("prev-go-btn");
prevGoBtn.onclick = () => {
  window.history.go(-1);
};

let nextGoBtn = window.document.getElementById("next-go-btn");
nextGoBtn.onclick = () => {
  window.history.go(1);
};
