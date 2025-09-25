'use strict'
const userModel = require('./model');
const mongoose = require("mongoose");
const auth = require('../../auth/auth');


exports.add = async (data) => {
    return new Promise(async(resolve, reject) => {
        try {

            console.log("000")
           
            let result = await mongoose.models.users.findOne().exec();
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


