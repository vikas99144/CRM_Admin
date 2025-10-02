'use strict'

const md5 = require('md5')
const crypto = require('crypto');
const Mongoose = require("mongoose");
const config = require('../config/dev.json').token;

const ObjectId = (id) => {
    return Mongoose.Types.ObjectId.createFromHexString(id);
}

const hexaId = (id) => {
    return id.toHexaString();
}

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

const slugify = (value) => {
    console.log("==value",value);
   return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/[\s-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}


exports.getHash = getHash;
exports.slugify = slugify;
exports.ObjectId = ObjectId;
exports.hexaId = hexaId;
exports.compareHash = compareHash;
exports.randomToken = randomToken;