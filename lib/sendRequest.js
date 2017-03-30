'use strict'

const ws = require('ws.js-buffer-fix')
const Http = ws.Http
const Mtom = ws.Mtom
const checkResponse = require('./checkResponse')

const addFiles = (options, xmlRequest) => {
  options.dokumenter.map((dokument, i) => {
    const xpath = `//data[${i}]`
    ws.addAttachment(xmlRequest, 'request', xpath, dokument.filsti, dokument.mimetype)
  })
}

module.exports = (options, xmlRequest) => {
  return new Promise((resolve, reject) => {
    if (!options) {
      throw Error('Missing required input: options object')
    }

    if (!xmlRequest) {
      throw Error('Missing required input: xmlRequest')
    }

    const handlers = [
      new Mtom(),
      new Http()
    ]

    addFiles(options, xmlRequest)
    ws.send(handlers, xmlRequest, page => {
      if (!page.response) {
        reject(page)
      }
      checkResponse(page.response)
        .then(resolve)
        .catch(reject)
    })
  })
}
