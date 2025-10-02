'use strict'

const Operation = require("../../operations");
const Mongoose = require("mongoose");

exports.create = async (data, h) => {
    let model = Mongoose.models.roles;
    return await Operation.CREATE(model, data);
}

exports.view = async (data) => {

}


exports.list = async (data) => {
    let { page, limit, search, start_date, end_date } = data;
    page = data.page || 1;
    limit = data.limit || 10;
    let model = Mongoose.models.roles, matchQuery = {};
    matchQuery["$and"] = [];
    matchQuery["$and"].push({is_deleted: false})
    if (search) {
        matchQuery["$or"] = [];
        matchQuery.push({ name: { $regex: search, $options: "i" } });
    }

    if (start_date) {
        matchQuery["$and"].push({ created_at: { $gte: start_date } });
    }
    if (end_date) {
        matchQuery["$and"].push({ created_at: { $lte: end_date } });
    }

    if (start_date && end_date) {
        matchQuery["$and"].push({ created_at: {$gte: start_date, $lte: end_date } });
    }
    let aggregateQuery = [
        {
            $match: matchQuery
        },
        {$sort:{created_at: -1}},
        {$skip: (page -1) * limit},
        {$limit: parseInt(limit)},
        {
            $project:{
                slug: 0
            }
        }
    ]

    return await Operation.FILTER(model, aggregateQuery);
}


