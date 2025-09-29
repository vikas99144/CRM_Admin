'use strict'

const handler = require('./handler');
const specs = require('./specs');

module.exports = [
    {
        method: 'POST',
        path:'/api/v1/admin/signup',
        options: specs.signup,
        handler: handler.signup
    },
    {
        method: 'POST',
        path:'/api/v1/admin/login',
        options: specs.login,
        handler: handler.login
    },
    {
        method: 'POST',
        path:'/api/v1/admin/list',
        options: specs.list,
        handler: handler.list
    }
]