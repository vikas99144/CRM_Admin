'use strict'

exports.add = async (data) => {
    return new Promise((resolve, reject) => {
        try {
            let query = { email: data.email };
        } catch (error) {
            reject(error);
        }
    })

}

exports.view = async (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let query = { email: data.email };


        } catch (error) {
            reject(error);
        }
    })

}


exports.list = async (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let query = { };
        } catch (error) {
            reject(error);
        }
    })

}


