const db = require('../dbConfig.js');

module.exports ={

  get: () => {
    return db('projects');
  },

  getById: (id) => {
    let query = db('projects')
    return query
      .leftJoin('actions', 'actions.projects_id', 'projects.id')
      .where('projects.id', id)
  },

  insert: function(newProject) {
    return db('projects')
      .insert(newProject)
      .then(() => db('projects'));
  },

  remove: function(id) {
    return db('projects')
      .where('id', id)
      .del();
  }
}
