
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {actions_description: 'action escription', notes: 'the action notes', completed: false, projects_id: 1},
        {actions_description: 'another action description', notes: 'the other action notes', completed: true, projects_id: 1},
        {actions_description: 'build front end', notes: 'use react for this one', completed: true, projects_id: 2}
      ]);
    });
};
