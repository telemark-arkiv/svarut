'use strict'

const EasyXml = require('easyxml')
const setDokumenter = require('./setDokumenter')
const setMottaker = require('./setMottaker')

const serializer = new EasyXml({
  rootElement: 'soap:Envelope',
  indent: 0,
  unwrapArrays: true
})

module.exports = options => {
  if (!options) {
    throw Error('Missing required input: options object')
  }

  if (!options.forsendelse) {
    throw Error('Missing required input: options.forsendelse object')
  }

  if (!options.forsendelse.avgivendeSystem) {
    throw Error('Missing required input: options.forsendelse.avgivendeSystem')
  }

  if (!options.tittel) {
    throw Error('Missing required input: options.tittel')
  }

  const dokumenter = setDokumenter(options)
  const mottaker = setMottaker(options.mottaker)
  const obj = {
    '_xmlns:soap': 'http://schemas.xmlsoap.org/soap/envelope/',
    'soap:Body': {
      'ns2:sendForsendelse': {
        '_xmlns:ns2': 'http://www.ks.no/svarut/services',
        forsendelse: {
          avgivendeSystem: options.forsendelse.avgivendeSystem,
          konteringskode: options.forsendelse.konteringskode,
          krevNiva4Innlogging: options.forsendelse.krevNiva4Innlogging,
          kryptert: options.forsendelse.kryptert,
          dokumenter: dokumenter,
          mottaker: mottaker,
          printkonfigurasjon: options.printkonfigurasjon,
          tittel: options.tittel
        }
      }
    }
  }

  let xml = serializer.render(obj)
  xml = xml.replace(/\n/g, '')

  const xmlRequest = {
    request: xml,
    url: options.config.url,
    action: options.config.action,
    contentType: 'application/soap+xml'
  }

  return xmlRequest
}
