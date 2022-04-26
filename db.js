const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config]) // Isso não é recomendável, pois perde-se um pouco do controle sobre a execução das migrations
module.exports = knex