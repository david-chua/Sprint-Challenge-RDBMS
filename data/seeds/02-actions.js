
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {actions_description: 'action description', notes: 'the action notes', actions_completed: false, projects_id: 1},
        {actions_description: 'another action description', notes: 'the other action notes', actions_completed: true, projects_id: 1},
        {actions_description: 'build front end', notes: 'use react for this one', actions_completed: true, projects_id: 2}
      ]);
    });
};
