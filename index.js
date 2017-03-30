'use strict'

const svarut = require('./lib/svarut')

module.exports = async options => {
  const data = await svarut(options)
  return data
}
