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
})

module.exports = server;
