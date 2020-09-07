require('dotenv').config();

const {
  USER,
  PASSWORD,
  DB,
} = process.env;

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: DB,
      user: USER,
      password: PASSWORD,
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },

  staging: {
    client: 'pg',
    connection: {
      database: DB,
      user: USER,
      password: PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds/staging',
    },
  },

  production: {
    client: 'pg',
    connection: {
      database: DB,
      user: USER,
      password: PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds/production',
    },
  },

};
