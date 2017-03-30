'use strict'

module.exports = async response => {
  const reg = new RegExp(/<return>(.+?)<\/return>/)
  if (response !== null && await reg.exec(response) !== null) {
    const id = await reg.exec(response)[1]
    return id
  } else {
    throw Error(`id not found in response ${response}`)
  }
}
