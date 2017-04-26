'use strict'

const svarut = require('./lib/svarut')

module.exports = async options => {
  try {
    const data = await svarut(options)
    return data
  } catch (error) {
    throw error
  }
}
