import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import Skill from "./components/Skill.js";

const myProfile = {
  name: " 최우식",
  img: {
    filePath: "profile.jpg",
    fileName: "프로필 사진",
  },
  birth: "1990. 03. 26",
  bloodType: "O",
  address: "대전광역시 유성구 문지로 193",
  email: "contact@elice.io",
  phone: "070.4633.2015",
  skill: [
    {
      name: "HTML",
      link: "https://ko.wikipedia.org/wiki/HTML",
    },
    {
      name: "CSS",
      link: "https://ko.wikipedia.org/wiki/CSS",
    },
    {
      name: "JAVASCRIPT",
      link: "https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8",
    },
    {
      name: "React",
      link: "#",
    },
  ],
};

const main = new Main(myProfile);

const skill = new Skill(myProfile.skill);

let app = document.querySelector("#app");
app.innerHTML = `
${Header}
${main.template()}
${Footer}
`;
