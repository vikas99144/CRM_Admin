'use strict';

const jwt = require('../../utils/jwt');
const bcrypt = require('../../utils/bcrypt');

exports.register = async ({ email, password }) => {
  const hash = await bcrypt.hash(password);

  // save user to DB (mock)
  return { email, password: hash };
};

exports.login = async ({ email, password }) => {
  // fetch user from DB (mock)
  const token = jwt.sign({ email });

  return { token };
};
