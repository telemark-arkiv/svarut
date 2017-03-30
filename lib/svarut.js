'use strict'

const buildXml = require('./buildXml')
const sendRequest = require('./sendRequest')

module.exports = options => {
  return new Promise((resolve, reject) => {
    if (!options) {
      throw Error('Missing required input: options')
    }

    if (!options.mottaker) {
      throw new Error('Missing required input: options.mottaker')
    }

    if (!options.tittel) {
      throw Error('Missing required input: options.tittel')
    }

    if (!options.dokumenter) {
      throw Error('Missing required input: options.dokumenter')
    }

    if (!Array.isArray(options.dokumenter)) {
      throw Error('Wrong input type: options.dokumenter must be an array')
    }

    if (!options.config) {
      throw Error('Missing required input: options.config')
    }

    const createJobs = mottaker => {
      return new Promise((resolve, reject) => {
        let opts = Object.assign(options)
        opts.mottaker = mottaker
        const svarutRequest = buildXml(opts)
        sendRequest(opts, svarutRequest)
          .then(id => {
            resolve(id)
          })
          .catch(reject)
      })
    }

    const jobs = Array.isArray(options.mottaker) ? options.mottaker.map(createJobs) : [createJobs(options.mottaker)]

    Promise.all(jobs)
      .then(data => {
        resolve(data)
      }).catch(e => {
        reject(e)
      })
  })
}
