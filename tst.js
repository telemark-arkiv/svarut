'use strict'

const svarUt = require('./index.js')
const fs = require('fs')

const options = {
  config: {
    url: 'https://username:password@test.svarut.ks.no/tjenester/forsendelseservice/ForsendelsesServiceV7'
  },
  tittel: 'SvarUt testdokument',
  dokumenter: [
    {
      data: fs.readFileSync('test/data/skoleskyss_avslag_vedtak.pdf').toString('base64'), // Must be base64
      filnavn: 'skoleskyss_avslag_vedtak.pdf',
      mimetype: 'application/pdf'
    }
  ],
  forsendelse: {
    avgivendeSystem: 'node-svarut test',
    konteringskode: '1111',
    krevNiva4Innlogging: false,
    kryptert: false,
    kunDigitalLevering: false
  },
  /*
  mottaker: [
    {
      type: 'privatPerson',
      // type: 'organisasjon', // Hvis organisasjon
      navn: 'Terje Tverrtryne',
      adresse1: 'Skogsveien 42',
      adresse2: '',
      adresse3: '',
      postnr: '3710',
      poststed: 'Skien',
      fodselsnr: '01029400470'
      // orgnr: '940192226' // Hvis organisasjon
    },
    {
      type: 'privatPerson',
      // type: 'organisasjon', // Hvis organisasjon
      navn: 'Terje Tverrtryne2',
      adresse1: 'Skogsveien 42',
      adresse2: '',
      adresse3: '',
      postnr: '3710',
      poststed: 'Skien',
      fodselsnr: '01029400470'
      // orgnr: '940192226' // Hvis organisasjon
    }
  ],
  */
  mottaker: {
    type: 'privatPerson',
    // type: 'organisasjon', // Hvis organisasjon
    navn: 'Terje Tverrtryne',
    adresse1: 'Skogsveien 42',
    adresse2: '',
    adresse3: '',
    postnr: '3710',
    poststed: 'Skien',
    fodselsnr: '01029400470'
    // orgnr: '940192226' // Hvis organisasjon
  },
  printkonfigurasjon: {
    brevtype: 'BPOST',
    fargePrint: true,
    tosidig: false
  }
}

svarUt(options)
  .then(console.log)
  .catch(console.error)
