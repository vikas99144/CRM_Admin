'use strict'

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


const userModel = module.exports = mongoose.model('users', userSchema, 'users');

