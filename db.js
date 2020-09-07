const { Database } = require('sqlite3');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: '',
    password: '',
    database: 'portfolio',
  },
});

module.exports = knex;
