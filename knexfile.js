// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: { // Esses valores vieram por padrão o nome genérico. O professor alterou durante o curso.
    database: 'knowledge',
    user:     'postgres',
    password: '123456'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
