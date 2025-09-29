'use strict'

const validator = require('./validator');
const userAuth = require('../../auth/auth');
const response = require("../../response/responses");

module.exports = {
    signup: {
        description: 'Admin signUp',
        notes: 'Admin signUp',
         tags: ["Admin","api"],
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

    login: {
        description: 'Admin login',
        notes: 'Admin login',
           tags: ["Admin","api"],
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
        description: 'Admin list',
        notes: 'Admin list',
        tags: ["Admin","api"],
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