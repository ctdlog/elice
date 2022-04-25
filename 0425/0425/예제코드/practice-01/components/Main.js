const htmlStr = `
<main>
    <h1 id="title">이력서</h1>
    <h2 id="name">최우식</h2>
    <div class="profile">
    <img src="profile.jpg" alt="프로필 사진" onclick="showProfileModal()" />
    </div>

    <div class="sub-container">
    <div class="sub-item">
        <h3 class="sub-title">최우식은요</h3>
        <div><strong>인적사항 : </strong>1990. 03. 26 | O형</div>
        <div><strong>주소 : </strong>대전광역시 유성구 문지로 193</div>
        <div><strong>연락처 : </strong>contact@elice.io | 070.4633.2015</div>
    </div>
    <div class="sub-item">
        <h3 class="sub-title">최우식의 발자취</h3>
        <ul>
        <li>2003. 03 ~ 2006. 02 : 엘리스중학교 | 경기 | 인문계</li>
        <li>2006. 03 ~ 2009. 02 : 엘리스고학교 | 서울 | 인문계</li>
        <li>2009. 03 ~ 2015. 02 : 엘리스대학교 | 서울 | 경영학과</li>
        </ul>
    </div>
    <div class="sub-item">
        <h3 class="sub-title">최우식의 활약</h3>
        <ol>
        <li>샘성 마케팅 공모전 대상</li>
        <li>대학생 봉사 동아리 회장</li>
        <li>깨깨오 마케팅 인턴 ㅣ 3개월</li>
        </ol>
    </div>
    <div class="sub-item">
        <h3 class="sub-title">최우식의 스킬</h3>
        <ul>
        <li>
            <a href="https://ko.wikipedia.org/wiki/HTML" target="_blank"
            >HTML</a
            >
        </li>
        <li><a href="https://ko.wikipedia.org/wiki/CSS">CSS</a></li>
        <li>
            <a
            href="https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8"
            >JAVASCRIPT</a
            >
        </li>
        </ul>
    </div>
    </div>
</main>
`;

export default htmlStr;
