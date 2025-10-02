'use strict'

const Lang = require("../../locales/en.json");
const controller = require('./controller');
const Decryption = require("../../auth/decrypt");
const Response = require("../../response")

const signup = async(request,h)=>{
    try{
        console.log(request.payload,">>>>>>===")
         const result = await controller.add(request.payload);
        console.log("==result =====", result);
        return Response.successData(h,Lang.DATA_SUCCESS,result);
    }catch(err){
        return Response.accessDenied(h,err.message,"signup");
    }
}

const login = async(request,h)=>{
    try{
         const result = await controller.login(request.payload);
        return response.successData(h,'INTERNAL_SERVER_ERROR',result);
    }catch(err){
        return response.accessDenied(h,err.message,"signup");
    }
}

const list = async(request,h)=>{
    try{
         const result = await controller.list(request.payload);
        return response.successData(h,'INTERNAL_SERVER_ERROR',result);
    }catch(err){
        return response.accessDenied(h,err.message,"signup");
    }
}

exports.signup = signup;
exports.login = login;
exports.list = list;