'use strict';

const router = require('express').Router();

router.use('/auth', require('../modules/auth/auth.routes'));
router.use('/users', require('../modules/user/user.routes'));
router.use('/admins', require('../modules/admin/admin.routes'));

router.get('/health', (req, res) => {
  res.json({ status: 'API running' });
});

module.exports = router;
