'use strict';

const router = require('express').Router();
const controller = require('./user.controller');
const auth = require('../../middlewares/auth.middleware');

router.get('/profile', auth, controller.profile);

module.exports = router;
