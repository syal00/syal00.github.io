import { isValidEmail } from './time-converter.js';

/**
 * Validates email using regex
 * @param {string} email - Email to check
 * @returns {boolean}
 */
export function checkEmail(email) {
  return isValidEmail(email);
}
