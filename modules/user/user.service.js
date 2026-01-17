'use strict';

const { mongoose } = require("../../db/mongo");
exports.getProfile = async (user) => {
  console.log("==== all data from connect db", mongoose.model("admins"));
  return {
    email: user.email,
    role: 'USER'
  };
};
