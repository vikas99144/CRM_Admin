'use strict';

module.exports = (req, res, next) => {
    const role = req.body.role;
    if (!role) throw new Error('Unauthorized');

    if (!allowedRoles.includes(userRole)) {
        throw new Error('Access denied');
    }
    next();
};
