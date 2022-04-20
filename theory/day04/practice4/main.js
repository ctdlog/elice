let phoneInput = document.getElementById("phone");

// phoneInput.addEventListener("keydown", (event) => {
//   // ascii code
//   if ((event.key >= "1" && event.key <= "9") || event.key == "-") {
//     // 입력을 하겠다는 뜻
//     return true;
//   }
//   // 입력을 안하겠다는 뜻
//   return false;
// });

phoneInput.onkeydown((event) => {
  // ascii code
  if (
    (event.key >= "1" && event.key <= "9") ||
    event.key == "-" ||
    event.key == "backspace"
  ) {
    // 입력을 하겠다는 뜻
    return true;
  }
  return false;
  // 입력을 안하겠다는 뜻
});
