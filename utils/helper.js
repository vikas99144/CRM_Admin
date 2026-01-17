const bcrypt = require('bcrypt');
const saltRounds = 10;
const md5 = require('md5')
const Mongoose = require("mongoose");

const getHash = async(password) => {
    return bcrypt.hash(password, saltRounds);
}

const compareHash = async (password, hash) => {
    return bcrypt.compare(password, hash)
}

const count = async (name) => {
    let result = 0;
    let exist = await Mongoose.models.counts.findOne({name: name}).exec();
    if(exist){
      result = await Mongoose.models.counts.findOneAndUpdate({name: name},{$inc:{count: 1}},{new: true}).exec();
    }else{
      result = await Mongoose.models.counts.create({name: name,count: 1});
    }
    return result.count;
}


const ObjectId = (id) => {
    return Mongoose.Types.ObjectId.createFromHexString(id);
}

const hexaId = (id) => {
    return id.toHexaString();
}

const randomToken = (value) => {
    const valueWithTimeStamp = value + Date.now()
    return md5(valueWithTimeStamp)
}

const slugify = (value) => {
   return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/[\s-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

exports.count = count;
exports.getHash = getHash;
exports.compareHash = compareHash;
exports.slugify = slugify;
exports.ObjectId = ObjectId;
exports.hexaId = hexaId;
exports.randomToken = randomToken;