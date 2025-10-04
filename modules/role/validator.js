
'use strict'

const Joi = require('joi');



module.exports = {

    create: {
        payload: Joi.object({
            name: Joi.string().required().description('Name is required'),
            permissions: Joi.array().items(Joi.string()).required().default(["read", "write", "delete"])
        })
    },

    view: {
        params: Joi.object({
            id: Joi.string().required().description('Id is required'),
        })
    },

    remove: {
        params: Joi.object({
            id: Joi.string().email().required().description('Id is required'),
        })
    },

    list: {
        query: Joi.object({
            page: Joi.number().required().default(1),
            limit: Joi.number().required().default(10)
        })
    },

    status: {
        params: Joi.object({
            id: Joi.string().required().description('Id is required')
        }),
        payload: Joi.object({
            status: Joi.string()
                .required()
                .valid('active', 'inactive')
                .description('Status is required')
                .messages({
                    'any.only': 'Invalid status: must be either active or inactive'
                })
        })
    },

    remove: {
        params: Joi.object({
            id: Joi.string().required().description('Id is required')
        })
    },

    status: {
        params: Joi.object({
            id: Joi.string().required().description('Id is required')
        }),
        payload: Joi.object({
            name: Joi.string()
                .required()
                .description('Name is required')
        })
    }
} 
