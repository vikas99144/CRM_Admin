'use strict'
const userModel = require('./model');
const DB = require("../../settings/db").configure();
const auth = require('../../auth/auth');

exports.userRegister = async (data) => {
    return new Promise(async(resolve, reject) => {
        try {
           

            let result = await DB.models("users").findOne();
 console.log("=D=====",result);
            let query = { email: data.email };
            userModel.findOneAndUpdate(query, data, { upsert: true, new: true }, (err, resdata) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(resdata);
                }
            })
        } catch (error) {
            reject(error);
        }
    })

}

exports.login = async (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let query = { email: data.email };
            let userExist  = await userModel.findOne({email: data.email});
            if(!userExist){
                reject({isSuccess: false, message:"Not found"})
            }
            let token = auth.createToken()
            userModel.findOneAndUpdate(query, data, { upsert: true, new: true }, (err, resdata) => {
                if (err) {
                    reject(err);
                } else {
                    resdata.token = auth.createToken(resdata.id)
                    resolve(resdata);
                }
            })
        } catch (error) {
            reject(error);
        }
    })

}


exports.list = async (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let query = { };
            userModel.find(query, (err, resdata) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(resdata);
                }
            })
        } catch (error) {
            reject(error);
        }
    })

}


