'use strict'

const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');

module.exports.configure = async (server) => {
  console.log('settings:swagger:configure:REGISTERING HAPI - SWAGGER')

  const swaggerOptions = {
    info: {
      title: 'Test API Documentation',
      version: '/api/v1/',
    },
    schemes: ['http', 'https'], 
    securityDefinitions: {
      'jwt': {
        'type': 'apiKey',
        'name': 'Authorization',
        'in': 'header'
        // 'x-keyPrefix': 'Bearer '
      }
    },
    security: [{ jwt: [] }],
    grouping: 'tags',
    tags: [
      { name: 'Admin', description: 'Admin related endpoints' },
      { name: 'Menu', description: 'Menu related endpoints' }
    ],

  };
  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    },
  ]);

  return true;
}