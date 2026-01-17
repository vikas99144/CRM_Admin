'use strict';
const config = require("../config");
const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return mongoose.connection;
  }

  try {
    mongoose.set('strictQuery', false);

    console.log("==check db conectiom==", config.dbUrl);
    await mongoose.connect(config.dbUrl, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000
    });

    isConnected = true;

    console.log('MongoDB connected successfully');
    return mongoose.connection;

  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = {
  connectDB,
  mongoose
};
