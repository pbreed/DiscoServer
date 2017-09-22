const knex = require('knex')(require('./knexfile'))
module.exports = {
  query() {
     return knex('records').select();
  }
}


