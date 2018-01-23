'use strict';

var env = JSON.parse(process.env.VCAP_SERVICES);

console.log('load datasources.production.js');

module.exports = {
  db: {
    connector: 'cloudant',
    url: env['cloudantNoSQLDB'][0].credentials.url,
    database: 'memo',
  },
};
