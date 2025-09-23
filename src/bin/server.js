'use strict'

const hapi = require('@hapi/hapi');
const serverConfig = require('../config/development.json'); 
const Jwt = require('@hapi/jwt');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
global.response = require('../responses/responses');
global.constant  = require('../constants/constant.json');
global.moment = require('moment');
let server;

const configurations = async(server) => {
    await require('../settings/preparation').configure()
    await require('../settings/database').configure()
    await require('../settings/mainRoute').configure(server)
    // await require('../settings/i18n').configure(server)
    await require('../settings/swagger').configure(server)
   init()
}


if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  
    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
  } else {
     server = new hapi.server({
        port: process.env.PORT || serverConfig.webServer.port,
        host: serverConfig.host,
        routes: {
            cors: {
                origin: ['*'],
                additionalHeaders: ['x-access-token'],
                additionalExposedHeaders: ['x-access-token']
            }
        }
    })
    configurations(server)
  }

const init = async () => {
    await server.start()
}

process.on('unhandledRejection', (err) => {
    console.log('bin:server:unhandledRejection')
    console.log(err)
    process.exit(1)
})







