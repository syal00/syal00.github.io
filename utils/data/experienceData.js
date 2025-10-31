/**
 * @typedef {Object} Experience
 * @property {string} company
 * @property {string} role
 * @property {string} startDate
 * @property {string} [endDate]
 * @property {string[]} points
 */

/**
 * @typedef {Experience[]} ExperienceData
 */
export const experienceData /** @type {ExperienceData} */ = [
  {
    company: "SCL Inc., Ottawa",
    role: "Web Developer and networking",
    startDate: "May 2025",
    endDate: "Aug 2025",
    points: [
      "Worked as a Web Developer, contributing to front-end web design and assisting with backend tasks",
      "Helped design and improve website layouts, ensuring usability and responsive design",
      "Supported backend development, including database and server-side updates",
      "Assisted with network setup and troubleshooting, helping maintain a secure and reliable infrastructure",
      "Collaborated with the team to deliver web and IT solutions on time"
    ]
  },
  {
    company: "Algonquin College, Ottawa",
    role: "Student Developer",
    startDate: "Jan 2025",
    endDate: null, // Present
    points: [
      "Designed and tested academic projects using Python and JavaScript",
      "Developed secure coding practices for back-end and front-end solutions",
      "Collaborated with Agile teams to plan and execute sprints",
      "Wrote technical documentation and conducted peer reviews"
    ]
  }
];
