'use strict'

const handler = require('./handler');
const specs = require('./specs');

module.exports = [
    {
        method: 'POST',
        path:'/api/v1/role/add',
        options: specs.add,
        handler: handler.add
    },
    {
        method: 'GET',
        path:'/api/v1/role/view/{id}',
        options: specs.view,
        handler: handler.view
    },
    {
        method: 'POST',
        path:'/api/v1/role/list',
        options: specs.list,
        handler: handler.list
    }
]