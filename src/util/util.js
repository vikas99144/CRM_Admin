'use strict'

const md5 = require('md5')
const crypto = require('crypto')
const config = require('../config/development.json').token;

const getHash = (password) => {
    let hash = crypto.createHmac('sha512', config.secret) 
    hash.update(password)
    return hash.digest('hex')
}

const compareHash = (password, hash) => {
    let decryptHash = crypto.createHmac('sha512', config.secret) 
    decryptHash.update(password)
    if (hash === decryptHash.digest('hex')) {
        return true
    }
    return false
}

const randomToken = (value) => {
    const valueWithTimeStamp = value + Date.now()

    return md5(valueWithTimeStamp)
}


exports.getHash = getHash;
exports.compareHash = compareHash;
exports.randomToken = randomToken;