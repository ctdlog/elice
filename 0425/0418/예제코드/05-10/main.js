const ES_VERSION = 6;

let ex1 = "안녕하세요? \
\"여러 줄\"을 쓰려면 이렇게 써야 \
합니다.";

console.log(ex1);

let ex2 = `템플릿 리터럴은
ES${ES_VERSION}부터 사용 가능합니다.
사용에 주의하시기 바랍니다.`;

console.log(ex2);

function insertText(text) {
    document.write(text);
    return "ok";
}

// let insertText = function(text) {
//     document.write(text);
//     return "ok";
// }

// let insertText = (text) => {
//     document.write(text);
//     return "ok";
// }