'use strict'

const svarut = require('../../index.js')
const test = require('ava')

test('it requires options', async t => {
  try {
    await svarut()
  } catch (e) {
    t.true(e.message.includes('Missing required input: options'), 'missing options')
  }
})

test('it requires options.mottaker', async t => {
  const options = {}
  try {
    await svarut(options)
  } catch (e) {
    t.true(e.message.includes('Missing required input: options.mottaker'), 'missing mottaker')
  }
})

test('it requires options.tittel', async t => {
  const options = {
    mottaker: true
  }
  try {
    await svarut(options)
  } catch (e) {
    t.true(e.message.includes('Missing required input: options.tittel'), 'missing tittel')
  }
})

test('it requires options.dokumenter', async t => {
  const options = {
    mottaker: true,
    tittel: true
  }
  try {
    await svarut(options)
  } catch (e) {
    t.true(e.message.includes('Missing required input: options.dokumenter'), 'missing dokumenter')
  }
})

test('it requires options.dokumenter to be an array', async t => {
  const options = {
    mottaker: true,
    tittel: true,
    dokumenter: true
  }
  try {
    await svarut(options)
  } catch (e) {
    t.true(e.message.includes('Wrong input type: options.dokumenter must be an array'), 'dokumenter must be an array')
  }
})

test('it requires options.config', async t => {
  const options = {
    mottaker: true,
    tittel: true,
    dokumenter: []
  }
  try {
    await svarut(options)
  } catch (e) {
    t.true(e.message.includes('Missing required input: options.config'), 'missing config')
  }
})
