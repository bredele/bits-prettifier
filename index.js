/**
 * Dependency
 */

const add = require('add-leading-zeros')

/**
 * Prettify binary string by grouping bits and adding leading
 * zeros if necessary.
 *
 * @param {String} str
 * @param {Number?} group
 * @return {String}
 * @api public
 */

module.exports = (str, group = 4) => {
  str = add(str, group)
  var output = ''
  var j = 0
  for (var i = 0, l = str.length - 1 ; i < l; i++) {
    var c = str[i]
    if (j++ < (group - 1)) {
      output += c
    } else {
      output += c + ' '
      j = 0
    }
  }
  output += str[i]
  return output
}
