'use strict'

const buildXml = require('../../lib/buildXml')
const test = require('ava')

test('it requires options', async t => {
  try {
    buildXml()
  } catch (e) {
    t.true(e.message.includes('Missing required input: options object'), 'missing options')
  }
})

test('it requires options.forsendelse', async t => {
  const options = {}
  try {
    buildXml(options)
  } catch (e) {
    t.true(e.message.includes('Missing required input: options.forsendelse object'), 'missing forsendelse')
  }
})

test('it requires options.forsendelse.avgivendeSystem', async t => {
  const options = {
    forsendelse: true
  }
  try {
    buildXml(options)
  } catch (e) {
    t.true(e.message.includes('Missing required input: options.forsendelse.avgivendeSystem'), 'missing forsendelse.avgivendeSystem')
  }
})

test('it requires options.tittel', async t => {
  const options = {
    forsendelse: {
      avgivendeSystem: true
    }
  }
  try {
    buildXml(options)
  } catch (e) {
    t.true(e.message.includes('Missing required input: options.tittel'), 'missing options.tittel')
  }
})

test('it requires options.mottaker', async t => {
  const options = {
    forsendelse: {
      avgivendeSystem: true
    },
    tittel: true
  }
  try {
    buildXml(options)
  } catch (e) {
    t.true(e.message.includes('Missing required input: options.mottaker'), 'missing options.mottaker')
  }
})
