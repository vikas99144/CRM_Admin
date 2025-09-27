

'use strict'

module.exports.configure =  async(server) => {
    console.log('settings:routes:Initialising routes')
     await server.route(require('../modules/admin/router'));
     await server.route(require('../modules/menu/router'));
}