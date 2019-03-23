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

server.get('/:id', (req,res) => {
  const {id} = req.params;
  projects
    .getById(id)
    .then(project => {
      let projectActions = project.map(action => {
        let id =  action.id;
        let description = action.actions_description;
        let notes = action.notes;
        let completed = action.actions_completed === 0? false: true;
        let actionItem =  {
          id: id,
          description: description,
          notes: notes,
          completed: completed
        }
        return actionItem
      })
      const projectValues = {
        id: project[0].projects_id,
        name: project[0].project_name,
        description: project[0].project_description,
        completed: project[0].completed === 0? false: true,
        actions: projectActions
      }
      res.json(projectValues)
    })
    .catch(err => {
      console.log(err)
      return errorHelper(500, 'Internal Server Error', res);
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
