const express = require('express');

const SessionController       = require('./controllers/SessionController');
const ProjectController       = require('./controllers/ProjectController');
const TimeController          = require('./controllers/TimeController');
const UserController          = require('./controllers/UserController');
const RegistroCivilController = require('./controllers/RegistroCivilController');
const ProdutoController       = require('./controllers/ProdutoController');
const PessoaController        = require('./controllers/PessoaController');
const ItemController          = require('./controllers/ItemController');
const VendaController         = require('./controllers/VendaController');

const routes = express.Router();

routes.get('/', function index(req, res){
    return res.json({ inicio : 'TELA INICIAL DO SISTEMA 10', data:  new Date()})
});

routes.get('/test', function index(req, res) {
    return res.json({variavel_token: process.env.token, data: new Date()})
});

// Sessions - authenticate using JWT
routes.post('/sessions/authenticate', SessionController.authMidleware, SessionController.authenticate);

// Users
routes.post('/users/store'      , UserController.store);
routes.post('/users/login'      , UserController.login);
routes.delete('/users/deleteAll', UserController.deleteAll);
routes.post('/users/validaLogin', UserController.validaLogin);
routes.get('/users'             , UserController.index);

// Projects
routes.post('/projects/store', ProjectController.store);
routes.get('/projects/index' , ProjectController.index);

// Times
routes.post('/times/store', TimeController.store);
//routes.get('/times/index', TimeController.index);
//routes.get('/times/findAll', TimeController.findAll);

// Registro Civil
routes.get('/registro/usuarios', RegistroCivilController.listaUsuarios1);
routes.post('/registro/store'  , RegistroCivilController.store);
routes.get('/registro/index'   , RegistroCivilController.index);

// Produto
routes.post('/produto/store' ,  ProdutoController.store);
routes.get( '/produto/index' ,  ProdutoController.index);
routes.post('/produto/remove', ProdutoController.remove);

// Pessoa
routes.post('/pessoa/store' , PessoaController.store);
routes.get( '/pessoa/index' , PessoaController.index);
routes.post('/pessoa/remove', PessoaController.remove);

// Item
routes.post('/item/store' , ItemController.store);
routes.get( '/item/index' , ItemController.index);
routes.post('/item/remove', ItemController.remove);

// Venda
routes.post('/venda/store' , VendaController.store);
routes.get( '/venda/index' , VendaController.index);
routes.post('/venda/remove', VendaController.remove);

module.exports = routes;