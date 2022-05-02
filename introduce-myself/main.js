// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (link == "#about") {
    window.scrollTo({ top: 950, behavior: "smooth" });
  } else if (link == "#elice") {
    window.scrollTo({ top: 1900, behavior: "smooth" });
  }
});
