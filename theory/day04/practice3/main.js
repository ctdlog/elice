let citySelect = window.document.getElementById("city");

seoulCountyList = ["강동구", "강서구", "강남구", "강북구", "..."];

citySelect.addEventListener("change", () => {
  console.log(this);
  let countySelect = window.document.getElementById("county");

  let optionHtmlStr = '<option value="">시/군/구 선택</option>';

  // 서울특별시가 선택됐을 때
  if (this.value == 1) {
    for (let i = 0; i < seoulCountyList.length; i++) {
      optionHtmlStr += `<option value="${i + 1}">${
        seoulCountyList[i]
      }</option>`;
    }
  }

  // 부산광역시가 선택됐을 때
  else if (this.value == 2) {
    countySelect.innerHTML = '<option value="1">남구</option>';
    countySelect.innerHTML = '<option value="2">강서구</option>';
    countySelect.innerHTML = '<option value="3">기장군</option>';
    countySelect.innerHTML = '<option value="4">해운대구</option>';
    countySelect.innerHTML = '<option value="5">...</option>';
  }

  countySelect.innerHTML = optionHtmlStr;
});
