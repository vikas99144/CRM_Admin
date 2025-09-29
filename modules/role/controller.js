'use strict'


exports.add = async (data) => {
    return new Promise((resolve, reject) => {
        try {
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

exports.view = async (data) => {
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


