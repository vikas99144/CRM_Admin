

'use strict';

module.exports.configure = async (server) => {
     const prefix = '/api/v1/admin';
     const addPrefix = (routes, prefix) => {
          return routes.map(route => ({
               ...route,
               path: prefix + route.path
          }));
     };

     await server.route(addPrefix(require('../modules/admin/router'), prefix));
     await server.route(addPrefix(require('../modules/acl/router'), prefix));
     await server.route(addPrefix(require('../modules/role/router'), prefix));
     await server.route(addPrefix(require('../modules/setting/router'), prefix));
};
