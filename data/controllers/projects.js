const express = require('express');
const projects = require('../helpers/projectsModel.js');

const server = express.Router();

const errorHelper = (status, message, res) => {
  res.status(status).json({err: message });
}

server.get('/', (req,res) => {
  projects
    .get()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      return errorHelper(500, 'Internal server error', res);
    })
})

server.post('/', (req,res) => {
  const newProject = {
    project_name: req.body.project_name,
    project_description: req.body.project_description,
    completed: req.body.completed
  }

  projects
    .insert(newProject)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      return errorHelper(500, 'Internal server error', res);
    });
});

module.exports = server;
