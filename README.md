[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://travis-ci.org/telemark/svarut.svg?branch=master)](https://travis-ci.org/telemark/svarut)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/svarut.svg)](https://greenkeeper.io/)

# svarut

Node module for SvarUt

More information on SvarUt [here](https://kurs.kommit.no/mod/page/view.php?id=193)

This module does *not* cover all methods in [ForsendelsesServiceV5](https://svarut.ks.no/tjenester/forsendelseservice/ForsendelsesServiceV5?wsdl)

Currently this module supports sending PDF-document(s) to private persons or organizations with SvarUt.

KS has plans to build a REST-API, so we will wait until this project is finished, to support the methods like retrieveForsendelseStatus, retrieveForsendelseHistorikk and setForsendelseLestAvEksterntSystem

## Installation
From npm

```sh
$ npm install svarut
```

From GitHub
```sh
$ git clone git@github.com:telemark/svarut.git
```

cd into directory and run install

```sh
$ npm i
```

## Usage

See [tst.js](tst.js)

Returns an array of ids

```javascript
['b53d8d15-75e8-4536-84d2-c275cc63f47e']
```
