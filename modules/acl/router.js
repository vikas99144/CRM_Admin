'use strict'

const handler = require('./handler');
const specs = require('./specs');

module.exports = [
    {
        method: 'POST',
        path: '/api/v1/menu/add',
        options: specs.add,
        handler: handler.add
    },
    {
        method: 'GET',
        path: '/api/v1/menu/view/{id}',
        options: specs.view,
        handler: handler.view
    },
    {
        method: 'POST',
        path: '/api/v1/menu/list',
        options: specs.list,
        handler: handler.list
    }
]