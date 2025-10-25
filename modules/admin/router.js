'use strict'

const handler = require('./handler');
const specs = require('./specs');

module.exports = [
    {
        method: 'POST',
        path: '/create',
        options: specs.create,
        handler: handler.create
    },
    {
        method: 'POST',
        path: '/login',
        options: specs.login,
        handler: handler.login
    },
    {
        method: 'GET',
        path: '/view/{admin_id}',
        options: specs.view,
        handler: handler.view
    },
    {
        method: 'GET',
        path: '/list',
        options: specs.list,
        handler: handler.list
    },
    {
        method: 'PATCH',
        path: '/status/{admin_id}',
        options: specs.status,
        handler: handler.status
    },
    {
        method: 'PATCH',
        path: '/update/{admin_id}',
        options: specs.update,
        handler: handler.update
    },
    {
        method: 'DELETE',
        path: '/delete/{admin_id}',
        options: specs.remove,
        handler: handler.remove
    }
]