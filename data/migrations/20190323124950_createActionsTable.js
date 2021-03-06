exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
    tbl.increments()
    tbl.string('actions_description')
      .notNullable()
    tbl.text('notes')
    tbl.boolean('actions_completed')
    tbl
      .integer('projects_id')
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
