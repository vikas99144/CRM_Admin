'use strict';

const jwt = require('jsonwebtoken');
const config = require('../config');

exports.sign = (payload) =>
  jwt.sign(payload, config.jwtSecret, { expiresIn: '1d' });

exports.verify = (token) =>
  jwt.verify(token, config.jwtSecret);
