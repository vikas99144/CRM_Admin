
'use strict'

const Joi = require('joi');


module.exports = {
    register: {
        payload: Joi.object({ 
            name: Joi.string().required().description('Name is required'),
            email: Joi.string().email().required().description('Email is required'),
            password: Joi.string().required().description('Password is required') 
        })

    },

    view: {
        payload: Joi.object({ 
            id: Joi.string().email().required().description('Id is required'),
        })

    },

    list: {
        payload: Joi.object({ 
            page: Joi.number(),
            limit: Joi.number()
        })

    }

} 
