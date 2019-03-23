const db = require('../dbConfig.js');

module.exports ={

  get: () => {
    return db('projects');
  },

  getById: (id) => {
    let query = db('projects')
    return query
      .innerJoin('actions', 'actions.projects_id', 'projects.id')
      .where('projects.id', id)
  },

  insert: function(newProject) {
    return db('projects')
      .insert(newProject)
      .then(() => db('projects'));
  }
}
