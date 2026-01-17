'use strict';

const userService = require('./user.service');
const { successResponse } = require('../../utils/response');

exports.profile = async (req, res, next) => {
  try {
    const data = await userService.getProfile(req.user);
    successResponse(res, 'Profile fetched', data);
  } catch (err) {
    next(err);
  }
};
