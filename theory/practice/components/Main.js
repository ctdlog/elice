export default class Main {
  profile;

  // 주소가 아닌 새로운 객체를 넘겨줄 수 있도록 주의하자
  constructor(profile) {
    this.profile = profile;
  }

  getSkill() {
    // Todo : 스킬 템플릿 가져와야함
  }

  template() {
    return `
      <main>
          <h1 id="title">이력서</h1>
          <h2 id="name">${this.profile.name}</h2>
          <div class="profile">
          <img src="${this.profile.img.filePath}" alt="${this.profile.img.fileName}" onclick="showProfileModal()" />
          </div>
      
          <div class="sub-container">
          <div class="sub-item">
              <h3 class="sub-title">최우식은요</h3>
              <div><strong>인적사항 : </strong>${this.profile.birth} | ${this.profile.bloodType}형</div>
              <div><strong>주소 : </strong>${this.profile.address}</div>
              <div><strong>연락처 : </strong>${this.profile.email} | ${this.profile.phone}</div>
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
            
          </div>
          </div>
      </main>
      `;
  }
}
