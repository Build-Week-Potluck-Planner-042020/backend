const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');
const usersRouter = require('./auth/auth-router');
const dashRouter = require('./dash/dashRouter')

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/api', usersRouter);
server.use('/api/dashboard', dashRouter)


server.get('/api', (req, res) => {
    res.send('server is working')
})

module.exports = server;