
const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');
const usersRouter = require('./auth/auth-router');
const potlucksRouter = require('./auth/potluck-router');
const foodsRouter = require('./auth/foods-router');
const authorization = require('./auth/restricted-middleware')

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/api', usersRouter);
server.use('/api/potlucks', authorization, potlucksRouter)
server.use('/api/foods', authorization, foodsRouter)
// server.use('/api/dashboard', dashRouter)




module.exports = server;