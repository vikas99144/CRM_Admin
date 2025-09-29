'use strict'

const validator = require('./validator');
const userAuth = require('../../auth/auth');
const response = require("../../response/responses");

module.exports = {
    add: {
        description: 'Role add',
        notes: 'Role add',
        tags: ['Role', "api"],
        plugins: {
            'hapi-swagger': {
                responses: {
                    200: {
                        description: 'Example of response model in return to success request',
                        schema: validator.success
                    },
                    320: {
                        description: 'Example of response model in return to failure request',
                        schema: validator.failure
                    }
                }
            }
        },
        validate: {
            payload: validator.register.payload,
            failAction: response.failAction
        }
    },

    view: {
        description: 'Role view',
        notes: 'Role view',
        tags: ['Role', "api"],
        plugins: {
            'hapi-swagger': {
                responses: {
                    200: {
                        description: 'Example of response model in return to success request',
                        schema: validator.success
                    },
                    320: {
                        description: 'Example of response model in return to failure request',
                        schema: validator.failure
                    }
                }
            }
        },
        validate: {
            payload: validator.view.params,
            failAction: response.failAction
        }
    },

    list: {
        description: 'Role list',
        notes: 'Role list',
        tags: ['Role', "api"],
        plugins: {
            'hapi-swagger': {
                responses: {
                    200: {
                        description: 'Example of response model in return to success request',
                        schema: validator.success
                    },
                    320: {
                        description: 'Example of response model in return to failure request',
                        schema: validator.failure
                    }
                }
            }
        },
        pre: [{
            method: userAuth.verifyToken,
            assign: 'token'
        }],
        validate: {
            payload: validator.list.payload,
            failAction: response.failAction
        }
    }
}