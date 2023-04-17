const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options['addition'] === false) {options['addition'] = 'false';}
  if (options['addition'] === null) {options['addition'] = 'null';}
  let substr = `${String(str)}`;
  let result = '';
  substr += Array(options['additionRepeatTimes'] || 1).fill(options['addition'] ? String(options['addition']) : '').join(options['additionSeparator'] || '|');
  result += Array(options['repeatTimes'] || 1).fill(substr).join(options['separator'] || '+');
  return result;
}

module.exports = {
  repeater
};
