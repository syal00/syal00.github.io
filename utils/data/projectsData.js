/**
 * @typedef {Object} Project
 * @property {string} title
 * @property {string} description
 * @property {string[]} tags
 * @property {string} [link]
 * @property {string} [repo]
 * @property {string} [image]
 */

/**
 * @typedef {Project[]} ProjectsData
 */
export const projectsData /** @type {ProjectsData} */ = [
  {
    title: "Banking System Console App",
    description: "Designed a console-based banking system with account creation, deposits/withdrawals, and lookup features. Applied object-oriented principles and exception handling.",
    tags: ["Python", "OOP", "Exception Handling"],
    repo: "https://github.com/syal00/Banking-System-Console-App-"
  },
  {
    title: "PokeDex Web App",
    description: "Built an interactive Pokedex using PokeAPI, with Pokémon search, catch/release features via localStorage, and dynamic UI elements.",
    tags: ["JavaScript", "API", "LocalStorage"],
    repo: "https://github.com/syal00"
  },
  {
    title: "Driver Recruitment Landing Page",
    description: "Developed a responsive landing page for a driver recruitment platform with a signup form, earnings calculator, and mobile-first design principles.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    repo: "https://github.com/syal00"
  },
  {
    title: "Traffic Light Simulator",
    description: "Created a hardware + CLI traffic light simulation with adjustable timing. Integrated NeoPixel LEDs with Python scripting for embedded and console testing.",
    tags: ["Python", "Hardware", "Raspberry Pi"],
    repo: "https://github.com/syal00"
  },
  {
    title: "Morse Code Converter",
    description: "Implemented a terminal application to translate text to Morse code using dictionary mappings, handling formatting between letters and words.",
    tags: ["Python", "Terminal", "Dictionary"],
    repo: "https://github.com/syal00"
  }
];
