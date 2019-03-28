const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');

//for frontend if i get there
const cors = require('cors');

const projectsRouter = require('./data/controllers/projects.js');
const actionsRouter = require('./data/controllers/actions.js');

const server = express();

const parser = express.json();
const logMiddleware = logger('dev');

server.use(parser, logMiddleware);
server.use(cors());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);


server.get('/', (req,res,next) => {
  res.send(`
    <h2> Project Tracker </h2>
    <p> David's project tracker </p>
    `)
})

module.exports = server;
