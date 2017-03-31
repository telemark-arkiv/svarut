'use strict'

const sendRequest = require('../../lib/sendRequest')
const test = require('ava')

test('it requires options', async t => {
  try {
    await sendRequest()
  } catch (e) {
    t.true(e.message.includes('Missing required input: options object'), 'missing options')
  }
})

test('it requires options.xmlRequest', async t => {
  const options = {}
  try {
    await sendRequest(options)
  } catch (e) {
    t.true(e.message.includes('Missing required input: xmlRequest'), 'missing xmlRequest')
  }
})
