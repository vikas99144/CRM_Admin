'use strict'

const Response = require("../response");
const jwt = require('jsonwebtoken');
const config = require('../config/dev.json').token;

const createToken = (id) => {
    const token = jwt.sign({
        id: id
    }, config.secret)
    return token
}


const verifyToken = async (request, reply) => {
    let token = request.headers.authorization || request.headers['token'];
    if (!token) {
        return Response.failure(reply, "Error in jwt");
    }
    return jwt.verify(token, config.secret, (err, user) => {
        if (err) {
            return Response.failure(reply, "Error error errro");
        }
        request.user = user;
        if (!user) {

            return Response.failure(reply, "Error in jwt");
        }
        return true;
    })
}

exports.createToken = createToken;
exports.verifyToken = verifyToken;