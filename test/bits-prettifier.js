/**
 * Dependencies
 */

const test = require('tape')
const prettify = require('..')

test('should group binary string in group of 4', assert => {
  assert.equal('1')
  assert.equal(prettify('11001110'), '1100 1110')
})
