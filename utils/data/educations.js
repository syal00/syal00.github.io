/**
 * @typedef {Object} Education
 * @property {string} title
 * @property {string} institution
 * @property {string} startDate
 * @property {string} [endDate]
 * @property {string} [description]
 * @property {string[]} [courses]
 * @property {string[]} [activities]
 */

/**
 * @typedef {Education[]} EducationsData
 */
export const educationsData /** @type {EducationsData} */ = [
  {
    title: "Diploma in Web Development and Internet Applications",
    institution: "Algonquin College, Ottawa, ON",
    startDate: "January 2025",
    endDate: null, // Present
    courses: [
      "Web Development",
      "Front-End Design",
      "Server-Side Programming",
      "Full-Stack Development"
    ],
    activities: [
      "Engaged in peer code reviews",
      "Agile sprint planning",
      "Full-stack group projects"
    ]
  }
];
