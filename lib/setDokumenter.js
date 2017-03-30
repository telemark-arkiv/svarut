'use strict'

const path = require('path')

module.exports = options => {
  if (!options) {
    throw Error('Missing required input: options object')
  }

  if (!options.dokumenter) {
    throw Error('Missing required input: options.dokumenter')
  }

  if (!Array.isArray(options.dokumenter)) {
    throw Error('Wrong input type: options.dokumenter must be an array')
  }

  const dokumenter = options.dokumenter.map(dokument => {
    if (!dokument.filsti) {
      throw Error('Missing required input: options.dokumenter.filsti')
    }
    if (!dokument.mimetype) {
      throw Error('Missing required input: options.dokumenter.mimetype')
    }
    return {
      data: '',
      filnavn: dokument.filnavn || path.basename(dokument.filsti),
      mimetype: dokument.mimetype
    }
  })

  return dokumenter
}
