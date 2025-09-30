

'use strict'

module.exports.configure =  async(server) => {
     await server.route(require('../modules/admin/router'));
     await server.route(require('../modules/menu/router'));
     await server.route(require('../modules/role/router'));
     await server.route(require('../modules/setting/router'));
}