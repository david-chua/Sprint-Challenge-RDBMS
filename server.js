const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');

//for frontend if i get there
const cors = require('cors');

const server = express();

const parser = express.json();
const logMiddleware = logger('dev');

server.use(parser, logMiddleware);
server.use(cors());


server.get('/', (req,res,next) => {
  res.send(`
    <h2> Project Tracker </h2>
    <p> David's project tracker </p>
    `)
})

module.exports = server;
