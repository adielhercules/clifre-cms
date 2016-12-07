/**
 * Capitalize first letter of string
 * @private
 * @param  {string} str - String
 * @return {string} String with first letter capitalized
 */
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.substr(1)
};

/**
 * Clamp position between a range
 * @param  {number} value - Value to be clamped
 * @param  {number} min - Minimum value in range
 * @param  {number} max - Maximum value in range
 * @return {number} Clamped value
 */
export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max)
};
