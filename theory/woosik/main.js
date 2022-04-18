const profile = document.querySelector(".profile");
const profileModal = document.querySelector(".profileModal");

profile.addEventListener("click", () => {
  profileModal.classList.add("visible");
});

profileModal.addEventListener("click", () => {
  profileModal.classList.remove("visible");
});
