// Este arquivo foi criado ao rodar o comando 'knex migrate:make create_table_users' dentro da pasta backend.
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
      table.increments('id').primary()
      table.string('name').notNull().unique()
      table.string('email').notNull().unique()
      table.string('password').notNull()
      table.boolean('admin').notNull().defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
