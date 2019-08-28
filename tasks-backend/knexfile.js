// Update with your config settings.

module.exports = {

  client: 'mysql',
  connection: {
    host: '192.81.170.13',
    database: 'souzaadv_apifindcode',
    user: 'souzaadv_qr',
    password: '&j?%2ysR3#Li'
    //password: '123'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }




};
