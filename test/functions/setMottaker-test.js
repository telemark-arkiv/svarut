'use strict'

const setMottaker = require('../../lib/setMottaker')
const test = require('ava')

test('it requires options', async t => {
  try {
    setMottaker()
  } catch (e) {
    t.true(e.message.includes('Missing required input: options object'), 'missing options')
  }
})

test('it requires options.type', async t => {
  const options = {}
  try {
    setMottaker(options)
  } catch (e) {
    t.true(e.message.includes('Missing required input: options.type'), 'missing options.type')
  }
})

test('it requires options.navn', async t => {
  const options = {
    type: true
  }
  try {
    setMottaker(options)
  } catch (e) {
    t.true(e.message.includes('Missing required input: options.navn'), 'missing options.navn')
  }
})

test('it requires options.postnr', async t => {
  const options = {
    type: true,
    navn: true
  }
  try {
    setMottaker(options)
  } catch (e) {
    t.true(e.message.includes('Missing required input: options.postnr'), 'missing options.postnr')
  }
})

test('it requires options.poststed', async t => {
  const options = {
    type: true,
    navn: true,
    postnr: true
  }
  try {
    setMottaker(options)
  } catch (e) {
    t.true(e.message.includes('Missing required input: options.poststed'), 'missing options.poststed')
  }
})

test('it requires options.fodselsnr or options.orgnr', async t => {
  const options = {
    type: true,
    navn: true,
    postnr: true,
    poststed: true
  }
  try {
    setMottaker(options)
  } catch (e) {
    t.true(e.message.includes('Missing required input: id-number (fodselsnr og orgnr)'), 'missing options.id-nummer')
  }
})

test('it accepts options.fodselsnr', async t => {
  const options = {
    type: true,
    navn: true,
    postnr: true,
    poststed: true,
    fodselsnr: true
  }
  try {
    const mottaker = setMottaker(options)
    t.truthy(mottaker)
  } catch (error) {
    throw error
  }
})

test('it accepts options.orgnr', async t => {
  const options = {
    type: true,
    navn: true,
    postnr: true,
    poststed: true,
    orgnr: true
  }
  try {
    const mottaker = setMottaker(options)
    t.truthy(mottaker)
  } catch (error) {
    throw error
  }
})
