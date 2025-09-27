'use strict'

const service = require('./service');
const specs = require('./specs');

module.exports = [
    {
        method: 'POST',
        path: '/api/v1/menu/add',
        options: specs.add,
        handler: service.add
    },
    {
        method: 'POST',
        path: '/api/v1/menu/view/{id}',
        options: specs.view,
        handler: service.view
    },
    {
        method: 'GET',
        path: '/api/v1/menu/list',
        options: specs.list,
        handler: service.list
    }
]