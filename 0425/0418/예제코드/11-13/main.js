function getMemberLevel(visitCnt) {
    let memberLevel = "";

    if (visitCnt >= 100) {
        memberLevel = "gold";
    } else if (visitCnt >= 30) {
        memberLevel = "silver";
    } else {
        memberLevel = "bronze";
    }

    return memberLevel;
}

function printPower() {
    for (let i = 1; i < 10; i++) {
        console.log(`${i} * ${i} = ${i * i}`);
    }
}

// function printPower() {
//     let i = 1;
//     while (i < 10) {
//         console.log(`${i} * ${i} = ${i * i}`);
//         i++;
//     }
// }