const db = require('../dbConfig.js');

module.exports ={

  get: () => {
    return db('projects');
  },

  insert: function(newProject) {
    return db('projects')
      .insert(newProject)
      .then(() => db('projects'));
  }
}
