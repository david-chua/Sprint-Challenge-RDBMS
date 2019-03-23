
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'project name here', project_description: 'the project description', completed: false},
        {project_name: 'build week project 1', project_description: 'build week project for webpt3', completed: true},
        {project_name: 'portfolio website', project_description: 'create a portfolio website before graduation', completed: false}
      ]);
    });
};
