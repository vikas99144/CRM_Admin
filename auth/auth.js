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


const verifyToken = async (request,reply) => {
    let token = request.headers.authorization || request.headers['token'];
    console.log("=== chec ceeotjjo",request.headers,request.headers.authorization)
    if(!token){
        console.log("== not authorized");
        return Response.failure(reply,"Error in jwt");
    }
    // return new Promise((resolve, reject) => {
        return jwt.verify(token, config.secret, (err, user) => {            
            if (err) {
                console.log("===err err err ===",err);
                // return resolve(false)
                return Response.failure(reply,"Error error errro");
            //   return reject(false);
            }
            console.log("===agyer decomde user user ===",user);
            request.user = user;
            if(!user){
                // return resolve(false)
                console.log("===agyer ///// ====== user ===",user);
                return Response.failure(reply,"Error in jwt");
            }
            return true;
        })
    // })
}


exports.createToken = createToken;
exports.verifyToken = verifyToken;