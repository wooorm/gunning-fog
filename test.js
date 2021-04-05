'use strict'

var test = require('tape')
var gunningFog = require('.')

test('gunningFog', function (t) {
  t.ok(Number.isNaN(gunningFog()), 'NaN when an invalid value is given')

  t.equal(round(gunningFog({sentence: 1, word: 13})), 5.2)

  t.equal(
    round(gunningFog({sentence: 1, word: 13, complexPolysillabicWord: 2})),
    11.353846
  )

  t.end()
})

function round(value) {
  return Math.round(value * 1e6) / 1e6
}
