'use strict'

const Response = require("../response");
const Boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const { ObjectId } = require("../utils")
const Mongoose = require("mongoose");
const Lang = require("../locales/en.json");
const config = require('../config/dev.json').token;

const createToken = (id, role) => {
    const token = jwt.sign({
        id: id,
        role: role
    }, config.secret)
    return token
}


const verifyToken = async (request, reply) => {
    let token = request.headers.authorization || request.headers['token'];
    if (!token) {
        return Response.failure(reply, Lang.UNAUTHORIZED_ACCESS);
    }
    return jwt.verify(token, config.secret, async (err, user) => {
        if (err) {
            console.log(err);
            return Response.failure(reply, "Error error errro");
        }
        request.user = user;
        if (!user) {
            return Response.failure(reply, "Error in jwt");
        }
        return true;
    })
}

exports.checkRoleAccess = (allowedRoles) => {
    return async (request, h) => {
        let role = await Mongoose.models.roles.findOne({ _id: ObjectId(request.payload.role) }).select("name slug").exec();
        const userRole = role.slug;
        if (!allowedRoles.includes(userRole)) {
            throw Boom.forbidden('Access denied');
        }
        return h.continue;
    };
};

exports.createToken = createToken;
exports.verifyToken = verifyToken;
