'use strict'

const hapi = require('@hapi/hapi');
const serverConfig = require('./config/dev.json'); 
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
global.response = require('./response/responses');
global.constant  = require('./constant/constant.json');
global.moment = require('moment');

let server;

const configurations = async(server) => {
    await require('./settings/prepare').configure()
    await require('./settings/db').configure()
    await require('./settings/main').configure(server)
    await require('./settings/swagger').configure(server)
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
        port: serverConfig.webServer.port,
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







