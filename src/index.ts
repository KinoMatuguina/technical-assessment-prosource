/**
 * This function will check if all the curly braces is balance
 * @param {string} str any string
 * @returns {boolean} will return boolean after checking if all the curly braces is balance
 */
export function hasBalanceCurlyBraces(str: string) {
  let count = 0;

  for (const char of str) {
    if (char === "{") {
      count++;
    } else if (char === "}") {
      if (count === 0) {
        return false;
      }
      count--;
    }
  }

  return count === 0;
}
