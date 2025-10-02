'use strict'

const handler = require('./handler');
const specs = require('./specs');

module.exports = [
    {
        method: 'POST',
        path: '/api/v1/role/create',
        options: specs.create,
        handler: handler.create
    },
    {
        method: 'GET',
        path: '/api/v1/role/view/{id}',
        options: specs.view,
        handler: handler.view
    },
    {
        method: 'GET',
        path: '/api/v1/role/list',
        options: specs.list,
        handler: handler.list
    },
        {
        method: 'PATCH',
        path: '/api/v1/role/status/{id}',
        options: specs.status,
        handler: handler.status
    },
    {
        method: 'DELETE',
        path: '/api/v1/role/delete/{id}',
        options: specs.remove,
        handler: handler.remove
    }
]