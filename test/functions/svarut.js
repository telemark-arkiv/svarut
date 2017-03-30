'use strict'

const svarut = require('../../index.js')
const test = require('ava')

test('it returns error', async t => {
  try {
    await svarut()
  } catch (e) {
    t.true(e.message.includes('Missing required input: options'), 'missing options')
  }
})

test('it returns error', async t => {
  const options = {}
  try {
    await svarut(options)
  } catch (e) {
    t.true(e.message.includes('Missing required input: options.mottaker'), 'missing mottaker')
  }
})
