'use strict'

const service = require('./service');
const specs = require('./specs');

module.exports = [
    {
        method: 'POST',
        path:'/api/v1/admin/signup',
        options: specs.signup,
        handler: service.signup
    },
    {
        method: 'POST',
        path:'/api/v1/admin/login',
        options: specs.login,
        handler: service.login
    },
    {
        method: 'POST',
        path:'/api/v1/admin/list',
        options: specs.list,
        handler: service.list
    }
]