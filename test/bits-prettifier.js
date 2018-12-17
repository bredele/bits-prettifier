/**
 * Dependencies
 */

const test = require('tape')
const prettify = require('..')

test('should group octet string in group of 4 bits from right to left', assert => {
  assert.plan(1)
  assert.equal(prettify('11001110'), '1100 1110')
})


test('should group binary string in group of 4 bits and add leading zeros if needed', assert => {
  assert.plan(1)
  assert.equal(prettify('110011101'), '0001 1001 1101')
})

test('should group binary string with specified index', assert => {
  assert.plan(1)
  assert.equal(prettify('110011101', 2), '01 10 01 11 01')
})
