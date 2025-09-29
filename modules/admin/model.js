'use strict'
const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    email: { type: String, required: true },
    country_code: { type: String, required: true },
    contact_number: { type: String, required: true },
    roles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    }],
    token: { type: String },
    pwd: { type: String },
    is_active: { type: Boolean, default: true },
    account_status: { type: String },
    is_deleted: { type: Boolean, default: false },
    created_by: { type: String },
    updated_by: { type: String }
},
    {
        versionKey: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    })


module.exports = mongoose.model('admins', adminSchema, 'admins');

