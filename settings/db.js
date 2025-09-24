
'use strict'

const dbConfig = require('../config/dev.json');
global.mongoose = require('mongoose');

module.exports.configure = ()=>{
    mongoose.connect(dbConfig.dbServer.url);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function callback() {
        console.log('Connection with database succeeded.');
    });
    
    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
          console.log('Mongoose default connection disconnected through app termination');
          process.exit(0);
        });
      });
      return db;
}



