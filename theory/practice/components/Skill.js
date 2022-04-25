export default class Skill {
  skills;

  constructor(skills) {
    this.skills = skills;
  }

  template() {
    let skillHtmlStr = "<ul>";

    for (let skill of this.skills) {
      skillHtmlStr += `
        <li>
            <a href="${skill.link}" target="_blank">${skill.name}</a>
        </li>
    `;
    }
    skillHtmlStr += "</ul>";

    return htmlSkillStr;
  }
}
