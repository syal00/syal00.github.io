/**
 * Maps skill names to their SVG icon paths
 * @param {string} skill - Skill name
 * @returns {string} Path to skill icon or default
 */
export function getSkillImage(skill) {
  const skillMap = {
    'JavaScript': '/svg/skills/javascript.svg',
    'Python': '/svg/skills/python.svg',
    'React': '/svg/skills/react.svg',
    'Java': '/svg/skills/java.svg',
    'HTML5': '/svg/skills/html.svg',
    'CSS3': '/svg/skills/css.svg',
    'Git': '/svg/skills/git.svg',
    'MySQL': '/svg/skills/mysql.svg',
    'Node.js': '/svg/skills/nodejs.svg',
    // Add more mappings as needed
  };

  return skillMap[skill] || '/svg/skills/default.svg';
}
