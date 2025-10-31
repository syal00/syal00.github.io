/**
 * Converts date strings to a consistent format
 * @param {string} startDate - Start date string
 * @param {string|null|undefined} endDate - End date string or null for present
 * @returns {string} Formatted date range
 */
export function formatDateRange(startDate, endDate) {
  if (!endDate || endDate === null || endDate === 'Present') {
    return `${startDate} – Present`;
  }
  return `${startDate} – ${endDate}`;
}

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean}
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Trims and validates string length
 * @param {string} str - String to validate
 * @param {number} min - Minimum length
 * @param {number} max - Maximum length
 * @returns {string|null} Trimmed string or null if invalid
 */
export function validateString(str, min = 1, max = 1000) {
  const trimmed = str?.trim() || '';
  if (trimmed.length < min || trimmed.length > max) {
    return null;
  }
  return trimmed;
}
