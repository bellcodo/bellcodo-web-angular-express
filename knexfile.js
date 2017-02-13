module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'mydb',
      user:     'admin'
    },
    seeds: {
      directory: './db/seeds'
    },
    migrations: {
      directory: './db/migrations'
    }
  }

};
