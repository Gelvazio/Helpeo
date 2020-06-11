const express = require('express');

const SessionController       = require('./controllers/SessionController');
const UserController          = require('./controllers/UserController');

const routes = express.Router();

routes.get('/', function index(req, res){
    return res.json({ inicio : 'TELA INICIAL DO SISTEMA 10', data:  new Date()})
});

// Sessions - authenticate using JWT
routes.post('/sessions/authenticate', SessionController.authMidleware, SessionController.authenticate);

// Users
routes.post('/users/store'      , UserController.store);
routes.post('/users/login'      , UserController.login);
routes.delete('/users/delete'   , UserController.delete);
routes.get('/users'             , UserController.index);

module.exports = routes;