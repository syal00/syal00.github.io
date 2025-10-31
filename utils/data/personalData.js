/**
 * @typedef {Object} PersonalData
 * @property {string} name
 * @property {string} role
 * @property {string} bio
 * @property {string[]} highlights
 * @property {string} location
 * @property {string} email
 * @property {string} phone
 * @property {{github?: string, linkedin?: string, twitter?: string, portfolio?: string}} links
 */
export const personalData /** @type {PersonalData} */ = {
  name: "Rakesh Syal",
  role: "Full Stack Developer",
  bio: "I have strong skills in Python, C#, .NET, PHP, JavaScript, HTML, and CSS for web and application development. I am experienced with SQLite databases for managing and storing data effectively. My knowledge extends to computer networking and hands-on work with Raspberry Pi projects. I also have exposure to graphic technologies, combining technical and design skills to build practical solutions.",
  highlights: [
    "Performance-first",
    "DX lover",
    "A11y advocate",
    "Skilled in Linux environments, Agile collaboration, and secure coding practices",
    "Recognized for problem-solving, adaptability, and delivering quality results"
  ],
  location: "Ottawa, ON",
  email: "syal0005@algonquinlive.com",
  phone: "368-645-4733",
  links: {
    github: "https://github.com/syal00",
    portfolio: "https://syal00.github.io"
  }
};
