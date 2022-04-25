function showProfileModal() {
    let htmlStr = ' \
<div class="profileModal"> \
    <img src="profile.jpg" alt="프로필 사진" onclick="hideProfileModal()" /> \
</div>';

    let modal = document.querySelector('#modal');
    modal.innerHTML = htmlStr;
}

function hideProfileModal() {
    let modal = document.querySelector('#modal');
    modal.innerHTML = '';
}