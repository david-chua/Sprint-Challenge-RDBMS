const db = require('../dbConfig.js');

module.exports ={

  get: () => {
    return db('actions');
  },
  insert: function(newAction) {
    return db('actions')
      .insert(newAction)
      .then(() => db('actions'));
  }
}
