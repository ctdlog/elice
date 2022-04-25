function showProfileModal() {
    let profileModal = document.createElement('div');
    profileModal.className = 'profileModal';

    let profileImg = document.createElement('img');
    profileImg.src = 'profile.jpg';
    profileImg.alt = '프로필 사진';
    profileImg.onclick = function () {
        hideProfileModal();
    }

    profileModal.appendChild(profileImg);

    let mainTag = document.querySelector('main');
    mainTag.appendChild(profileModal);
}

function hideProfileModal() {
    let profileModal = document.querySelector('.profileModal');

    let mainTag = document.querySelector('main');
    mainTag.removeChild(profileModal);
}
