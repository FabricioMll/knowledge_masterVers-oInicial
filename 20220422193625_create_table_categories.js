// Este arquivo foi criado ao rodar o comando 'knex migrate:make create_table_categories' dentro da pasta backend.
exports.up = function(knex, Promise) {
    return knex.schema.createTable('categories', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.integer('parentId').references('id')
            .inTable('categories')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('categories')
};
