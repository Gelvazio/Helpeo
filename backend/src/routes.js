const { Router } = require("express");
const multer = require('multer');
const multerConfig = require('./configs/multer');

const routes = Router();
const upload = multer(multerConfig);

const ItemsController = require('./Controllers/ItemsController');
const PointsController = require('./Controllers/PointsController');
const AuthController = require('./Controllers/AuthController');
const UsersController = require('./Controllers/UsersController');

// Authorization of routes
const Authorization = require('./middlewares/Authorization')

// Rotas que precisam de autorização
routes.use('/user', Authorization)

routes.get('/', function index(req, res) {
    return res.json({inicio: 'TELA INICIAL DO SISTEMA', data: new Date()});
});

routes.post('/signup', AuthController.signUp);
routes.post('/signin', AuthController.signIn);

routes.get('/user/authenticated', (req, res) => {
  res.send('');
})

// Routes of user
routes.get('/user/get', UsersController.get);
routes.get('/user', UsersController.show);
routes.get('/user/all', UsersController.all);
routes.delete('/user', UsersController.delete);

routes.get('/items', ItemsController.index);
routes.get('/points', PointsController.index);
routes.get('/points/:id', PointsController.show);

module.exports = routes;
