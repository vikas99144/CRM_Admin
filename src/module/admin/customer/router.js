'use strict'

const service = require('../service/index');
const specs = require('../specs/index');

module.exports = [
    {
        method: 'POST',
        path:'/api/v1/users/signup',
        options: specs.signup,
        handler: service.signup
    },
    {
        method: 'POST',
        path:'/api/v1/users/login',
        options: specs.login,
        handler: service.login
    },
    {
        method: 'POST',
        path:'/api/v1/users/list',
        options: specs.list,
        handler: service.list
    }
]