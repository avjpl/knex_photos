
exports.up = function(knex) {
  return knex.schema
    .createTable('photos', function(table) {
      table.increments('id');
      table.string('url', 255).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('photos');
};
