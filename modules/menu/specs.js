'use strict'

const validator = require('./validator');
const userAuth = require('../../auth/auth');

module.exports = {
    add: {
        description: 'Menu Add',
        notes: 'Menu Add',
         tags: ["Menu", "api"],
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
        description: 'Menu view',
        notes: 'Menu view',
        tags: ["Menu", "api"],
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
            payload: validator.login.payload,
            failAction: response.failAction

        }

    },

    list: {
        description: 'Menu list',
        notes: 'Menu list',
        tags: ["Menu", "api"],
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
            payload: validator.list.params,
            failAction: response.failAction
        }

    }

}