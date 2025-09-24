

'use strict'

module.exports.configure =  async(server) => {
    console.log('settings:routes:Initialising routes')
     await server.route(require('../modules/admin/router'));
      
}