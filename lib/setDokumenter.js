'use strict'

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
  if (options.dokumenter.length === 0) {
    throw Error('Empty array: options.dokumenter must have data')
  }

  const dokumenter = options.dokumenter.map(dokument => {
    if (!dokument.data) {
      throw Error('Missing required input: options.dokumenter.data')
    }
    if (!dokument.mimetype) {
      throw Error('Missing required input: options.dokumenter.mimetype')
    }
    return {
      data: '',
      filnavn: dokument.filnavn,
      mimetype: dokument.mimetype
    }
  })

  return dokumenter
}
