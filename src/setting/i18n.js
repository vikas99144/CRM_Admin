'use strict'

const   register   =  require('hapi-locale-i18n');

module.exports.configure = async (server) => {
    console.log("===>>>>> print register of the hapi-locale-i18n ===>>>>",register);
    console.log('settings:i18n:configure:REGISTERING HAPI - SWAGGER')

    await server.register({
        register: register,
        options: {
          locales: ['de', 'en', 'fr'],
          directory: './locales',
          defaultLocale: 'en'
        }
      }, (err) => {
         console.log(err);
      })
    return true;
}





