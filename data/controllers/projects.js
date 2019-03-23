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

module.exports = server;
