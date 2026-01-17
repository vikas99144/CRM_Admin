'use strict';

const jwt = require('../utils/jwt');

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) throw new Error('Unauthorized');

  req.user = jwt.verify(token);
  next();
};
