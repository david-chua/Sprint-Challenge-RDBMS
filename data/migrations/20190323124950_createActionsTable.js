exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
    tbl.increments();
    tbl.string('actions_description')
      .notNullable()
    tbl.text('notes')
    tbl.boolean('completed')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
