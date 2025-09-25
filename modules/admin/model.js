'use strict'
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    token: { type: String },
    password: { type: String, default: null }
},
    {
        versionKey: false,
        timestamps: true
    })


module.exports = mongoose.model('users', userSchema, 'users');

