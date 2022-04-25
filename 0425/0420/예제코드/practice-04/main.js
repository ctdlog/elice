let phoneInput = document.getElementById("phone");
// phoneInput.onkeydown = function (event) {
//     if (
//         (event.key >= '0' && event.key <= '9')
//         || event.key == '-'
//         || event.key === 'Backspace'
//     ) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

phoneInput.addEventListener("keydown", function (event) {
    console.log(event)
    if (
        (event.key >= '0' && event.key <= '9')
        || event.key == '-'
        || event.key === 'Backspace'
    ) {
        return true;
    }
    else {
        event.preventDefault();
        return false;
    }
});
