let seoulCounties = [
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "..."
];
let busanCounties = [
    "강서구",
    "금정구",
    "기장군",
    "남구",
    "동구",
    "..."
];

let citySelect = document.getElementById("city");
citySelect.onchange = function () {
    let countySelect = document.getElementById("county");
    let optionStr = '<option value="">시/군/구 선택</option>';

    if (this.value == 1) {
        for (let i = 0; i < seoulCounties.length; i++) {
            optionStr += `<option value="${i+1}">${seoulCounties[i]}</option>`;
        }
    }
    else if (this.value == 2) {
        for (let i = 0; i < busanCounties.length; i++) {
            optionStr += `<option value="${i+1}">${busanCounties[i]}</option>`;
        }
    }

    countySelect.innerHTML = optionStr;
}
