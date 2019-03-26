const express = require('express');
const actions = require('../helpers/actionsModel.js');

const server = express.Router();

const errorHelper = (status, message, res) => {
  res.status(status).json({err: message });
}

server.get('/', (req,res) => {
  actions
    .get()
    .then(actions => {
      res.json(actions);
    })
    .catch(err => {
      return errorHelper(500, 'Internal server error', res);
    })
});

server.post('/', (req,res) => {
  const newAction = {
    actions_description: req.body.actions_description,
    notes: req.body.notes,
    actions_completed: req.body.completed,
    projects_id: req.body.projects_id
  }

  actions
    .insert(newAction)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      return errorHelper(500, 'Internal server error', res);
    });
});



module.exports = server;
