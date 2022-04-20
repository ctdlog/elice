// const profile = document.querySelector(".profile");
// const profileModal = document.querySelector(".profileModal");

// profile.addEventListener("click", () => {
//   profileModal.classList.add("visible");
// });

// profileModal.addEventListener("click", () => {
//   profileModal.classList.remove("visible");
// });

function showProfileModal() {
  let profileModal = document.createElement("div");
  let profileImg = document.createElement("img");
  profileImg.src = "profile.jpeg";
  profileImg.alt = "프로필 사진";

  profileImg.onclick = function () {
    hideProfileModal();
  };

  profileModal.className = "profileModal";
  profileModal.appendChild(profileImg);

  let mainTag = document.querySelector("main");
  mainTag.appendChild(profileModal);
}

function hideProfileModal() {
  let profileModal = document.querySelector(".profileModal");

  let mainTag = document.querySelector("main");
  mainTag.removeChild(profileModal);
}
