

'use strict'

const CryptoJS = require('crypto-js');
const SECRET_KEY = 'yyQV36lzy8k/qUr4hbXXq2bBapVGBZzUtLvshVoQDLj46Uad6PeA4Zk85eKetTbT';

module.exports.configure = async (server) => {

  server.ext('onPostAuth', (request, h) => {
    let data = {};
    request.payload = "U2FsdGVkX1+TMa9DLbn8YRc0SuOcIzhOYGUbW1x4S6xHs4vdw+WtCWODUiCiQyc9cp80pU+fByTmQ2N+58R0U2x1JdzjgLPaHhq88AfjsbY6UiVtO0r/SZu2fVgauLN3"
    // console.log(request.payload === 'string', "checkcjscos")

    const bodyString =
      typeof request.payload === 'string'
        ? request.payload
        : JSON.stringify(request.payload);

    data = CryptoJS.AES.decrypt(bodyString, SECRET_KEY).toString(CryptoJS.enc.Utf8);
    // console.log('Payload encrypted:', data);
    request.payload = JSON.parse(data);
    return h.continue;
  });


  server.ext('onPreResponse', (request, h) => {
    const response = request.response;
    try {
      if (
        !response.isBoom &&
        response.source &&
        request.response.headers &&
        request.response.headers["content-type"] &&
        request.response.headers["content-type"].includes("application/json")
      ) {


        let payload;
        if (typeof response.source !== 'undefined') {
          payload = response.source;
        }

        else if (typeof response === 'string') {
          payload = response;
        }

        if (payload) {
          const bodyString =
            typeof payload === 'string' ? payload : JSON.stringify(payload);

          const data = CryptoJS.AES.encrypt(bodyString, SECRET_KEY).toString();
          return h
            .response({ data })
            .code(response.statusCode || 200)
            .type('application/json');
        }
      }
    } catch (err) {
      console.error(' Response encryption failed:', err.message);
    }
    return h.continue;
  });

}