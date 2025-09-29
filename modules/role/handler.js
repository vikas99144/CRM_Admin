'use strict'
const Lang = require("../../locales/en.json");
const controller = require('./controller');

const add = async(request,h)=>{
    try{
         const result = await controller.add(request.payload);
        return response.successData(h,Lang.DATA_SUCCESS,result);
    }catch(err){
        return response.accessDenied(h,err.message,"signup");
    }
}

const view = async(request,h)=>{
    try{
        console.log("==")
         const result = await controller.view(request.payload);
        return response.successData(h,Lang.DATA_SUCCESS,result);
    }catch(err){
        return response.accessDenied(h,err.message,"signup");
    }
}

const list = async(request,h)=>{
    try{
         const result = await controller.list(request.payload);
         return response.successData(h,Lang.DATA_SUCCESS,result);
    }catch(err){
        return response.accessDenied(h,err.message,"signup");
    }
}

const remove = async(request,h)=>{
    try{
         const result = await controller.remove(request.payload);
         return response.successData(h,Lang.DATA_SUCCESS,result);
    }catch(err){
        return response.accessDenied(h,err.message,"signup");
    }
}

exports.add = add;
exports.view = view;
exports.list = list;
exports.remove = remove;