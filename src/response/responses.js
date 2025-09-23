'use strict'

const success = (h, message) => {
    const res = h.response({
        isSuccess: true,
        status: 'success',
        statusCode: 200,
        message: message,
        data:{}
    })
    res.code(200)
    return res
}

const successWithCustomMessage = (h, message) => {
    const res = h.response({
        isSuccess: true,
        status: 'success',
        statusCode: 201,
        message: message,
        data:{}
    })
    res.code(200)
    return res
}

const successData = (h, message,data) => {
    const res = h.response({
        isSuccess: true,
        statusCode: 200,
        message: message,
        data:data
    })
    res.code(200)
    return res
}

const listingData = (h, message,serviceName) => {
    const res = h.response({
        isSuccess: true,
        status: 'success',
        statusCode: 200,
        message: "Fetched successfully",
        data: {
            [serviceName] : message
        }
    })
    res.code(200)
    return res
}

const page = (h, items, pageSize, pageNo, total) => {
    const res = h.response({
        isSuccess: true,
        status: 'success',
        statusCode: 200,
        pageNo: pageNo || 1,
        items: items,
        pageSize: pageSize || items.length,
        count: total
    })
    res.code(200)
    return res
}

const dataPaged = (h, data,serviceName) => {
    const res = h.response({
        isSuccess: true,
        status: 'success',
        statusCode: 200,
        data: {
            totalCount : data.totalCount,
            [serviceName] : data
        }
    })
    res.code(200)
    return res
}

const data = (h, item) => {
    const res = h.response({
        isSuccess: true,
        status: 'success',
        statusCode: 200,
        data: item
    })
    res.code(200)
    return res
}
const failure = (h, message) => {
    const res = h.response({
        isSuccess: false,
        status: 'failure',
        statusCode: 320,
        message: message
    })
    res.code(200)
    res.takeover()
    return res
}

const accessDenied = (h, message) => {
    const res = h.response({
        isSuccess: false,
        status: 'failure',
        statusCode: 400,
        message: message,
        data:{
             
        }
    })
    res.code(200)
    res.takeover()
    return res
}

const accessDenied2 = (h, message) => {
    const res = h.response({
        isSuccess: false,
        status: 'failure',
        statusCode: 401,
        message: message,
        data:{
             
        }
    })
    res.code(200)
    res.takeover()
    return res
}

const accessRevoked = (h, message) => {
    const res = h.response({
        isSuccess: false,
        status: 'failure',
        statusCode: 406,
        message: message
    })
    res.code(200)
    res.takeover()
    return res
}

const versionUpdate = (h, message) => {
    const res = h.response({
        isSuccess: false,
        status: 'failure',
        statusCode: 408,
        message: message
    })
    res.code(200)
    res.takeover()
    return res
}

const accessGranted = (h, user, token) => {
    const res = h.response({
        status: 'success',
        statusCode: 200,
        message: 'Successfully Login',
        data: user
    })
    res.header('x-access-token', token)
    return res
}

const error = (h) => {
    const res = h.response({
        status: 'error',
        statusCode: 500,
        message: 'Technical Error! Please try again later.'
    })
    res.code(200)
    res.takeover()
    return res
}

const failAction = (request, h, error) => {
    let customErrorMessage = ''
    if (error.output.payload.message.indexOf('[') > -1) {
        customErrorMessage = error.output.payload.message.substr(error.output.payload.message.lastIndexOf('['))
    } else {
        customErrorMessage = error.output.payload.message
    }
    customErrorMessage = customErrorMessage.replace(/"/g, '')
    customErrorMessage = customErrorMessage.replace('[', '')
    customErrorMessage = customErrorMessage.replace(']', '')
    customErrorMessage = customErrorMessage.replace(']', '')
    const res = h.response({
        isSuccess: false,
        status: 'failure',
        statusCode: 320,
        message: customErrorMessage
    })
    res.code(200)
    res.takeover()
    return res
}

const accessDeniedAction = (request, h, error) => {
    let customErrorMessage = ''
    if (error.output.payload.message.indexOf('[') > -1) {
        customErrorMessage = error.output.payload.message.substr(error.output.payload.message.lastIndexOf('['))
    } else {
        customErrorMessage = error.output.payload.message
    }
    customErrorMessage = customErrorMessage.replace(/"/g, '')
    customErrorMessage = customErrorMessage.replace('[', '')
    customErrorMessage = customErrorMessage.replace(']', '')
    customErrorMessage = customErrorMessage.replace(']', '')
    const res = h.response({
        isSuccess: false,
        status: 'failure',
        statusCode: 400,
        message: customErrorMessage
    })
    res.code(200)
    res.takeover()
    return res
    
}



const showParamsErrorResponse = (message) => {
    const resData = { 
        "status": "failure", 
        "status_code": 200, 
        "error_code": 5001, 
        "error_description": "Missing Params or Params data type error!", 
        "message": message,
         "data": {}, 
         "error": {} };
    return resData;
}

const showValidationErrorResponse = (message) => {
    const resData = { 
        "status": "failure", 
        "status_code": 200, 
        "error_code": 5002, 
        "error_description": 
        "Validation Error!", 
        "message": __(message), 
        "data": {}, 
        "error": {} };
    return resData;
}

const showInternalServerErrorResponse = (message) => {
        const resData = { 
            "status": "failure", 
            "status_code": 200, 
            "error_code": 5003, 
            "error_description": "Internal Coding error or Params Undefined!", 
            "message": message, 
            "data": {}, 
            "error": {} };
        return resData;

    
}

const showUnathorizedErrorResponse = (message) => {
        const resData = { 
            "status": "failure", 
            "status_code": 200, 
            "error_code": 5004, 
            "error_description": "Invalid Login Credential!", 
            "message": __(message), 
            "data": {}, 
            "error": {} };
        return resData;
    
}

const showDatabaseErrorResponse = (message, error) => {

        const resData = { 
            "status": "failure", 
            "status_code": 200, 
            "error_code": 5005, 
            "error_description": "Database error!", 
            "message": __(message), 
            "data": {}, 
            "error": error };
        return resData;

}

const showAWSImageUploadErrorResponse = (message, error) => {
        const resData = { 
            "status": "failure", 
            "status_code": 200, 
            "error_code": 5006, 
            "error_description": "AWS error!", 
            "message": __(message), 
            "data": {}, 
            "error": error };
        return resData;
   
}

const showTwillioErrorResponse = (message) => {
        const resData = { 
            "status": "failure", 
            "status_code": 200, 
            "error_code": 5007, 
            "error_description": 
            "Twillio Api Error!", 
            "message": message, 
            "data": {}, 
            "error": {} };
        return resData;

   
}

const showGoogleMapsErrorResponse = (message) => {

        const resData = { 
            "status": "failure", 
            "status_code": 200, 
            "error_code": 5008, 
            "error_description": "Google Maps Api Error!", 
            "message": message, 
            "data": {}, 
            "error": {} };
        return resData;

}

const showStripeErrorResponse = (message, code) => {

        const resData = { 
            "status": "failure", 
            "status_code": 200, 
            "error_code": 5009, 
            "stripe_error_code": code, 
            "error_description": "Stripe Api Error!", 
            "message": message, 
            "data": {}, 
            "error": {} };
        return resData;

   
}

const showSquareErrorResponse = (message) => {
        const resData = { 
            "status": "failure", 
            "status_code": 200, 
            "error_code": 50010, 
            "error_description": "Square Api Error!", 
            "message": message, 
            "data": {}, 
            "error": {} };
        return resData;

}

const showSuccessResponse = (message, data) => {
    const resData = { 
        "status": "success", 
        "status_code": 200, 
        "message": __(message), 
        "data": data };
    return resData;
}

const showSuccessResponseCount = (message, data, count) => {
    const resData = { 
        "status": "success", 
        "status_code": 200, 
        "message": __(message), 
        "data": data, 
        "totalcount":count };
    return resData;  
}

exports.page = page
exports.data = data
exports.error = error
exports.failure = failure
exports.success = success
exports.dataPaged = dataPaged
exports.accessDenied = accessDenied
exports.accessDenied2 = accessDenied2
exports.accessRevoked = accessRevoked
exports.accessGranted = accessGranted
exports.versionUpdate = versionUpdate
exports.successWithCustomMessage = successWithCustomMessage
exports.failAction = failAction
exports.accessDeniedAction = accessDeniedAction
exports.successData = successData
exports.listingData = listingData
exports.showParamsErrorResponse = showParamsErrorResponse
exports.showValidationErrorResponse = showValidationErrorResponse
exports.showInternalServerErrorResponse = showInternalServerErrorResponse
exports.showUnathorizedErrorResponse = showUnathorizedErrorResponse
exports.showDatabaseErrorResponse = showDatabaseErrorResponse
exports.showAWSImageUploadErrorResponse = showAWSImageUploadErrorResponse
exports.showTwillioErrorResponse = showTwillioErrorResponse
exports.showGoogleMapsErrorResponse = showGoogleMapsErrorResponse
exports.showStripeErrorResponse = showStripeErrorResponse
exports.showSquareErrorResponse = showSquareErrorResponse
exports.showSuccessResponse = showSuccessResponse
exports.showSuccessResponseCount = showSuccessResponseCount