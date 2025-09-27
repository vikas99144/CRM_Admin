'use strict'

const menuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    is_deleted: { type: Boolean, default: false },
    status: { type: String },
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


module.exports = mongoose.model('menues', menuSchema, 'menues');



