'use strict';

const authService = require('./auth.service');
const { successResponse } = require('../../utils/response');

exports.register = async (req, res, next) => {
  try {
    const data = await authService.register(req.body);
    successResponse(res, 'User registered successfully', data);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const data = await authService.login(req.body);
    successResponse(res, 'Login successful', data);
  } catch (err) {
    next(err);
  }
};
