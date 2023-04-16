const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  for (let _ = 0; _ < arr.length - 1; _++) {
      for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] !== -1) {
              let x = 1;
              while (arr[i + x] === -1) {
                  x++;
              }
              if (arr[i] > arr[i + x]) {
                  [arr[i], arr[i + x]] = [arr[i + x], arr[i]]
              }
          }
      }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
