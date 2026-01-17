'use strict';

const router = require('express').Router();
const controller = require('./admin.controller');
const auth = require('../../middlewares/auth.middleware');

router.post('/create', auth, controller.create);
router.get('/view/:id', auth, controller.view);
router.post('/list', auth, controller.list);
router.delete('/:id', auth, controller.remove);

module.exports = router;

