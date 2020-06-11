const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();

const dotenv = require ('dotenv');
const config = dotenv.config();

const database = process.env.DB_MONGO_DATABASE
const username = process.env.DB_MONGO_USERNAME
const password = process.env.DB_MONGO_PASSWORD
const hostname = process.env.DB_MONGO_HOSTNAME
const port     = process.env.DB_MONGO_PORT

const uri = `mongodb+srv://${hostname}/${database}`;

const options = {
    user: username,
    pass: password,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

mongoose.connect(uri, options);

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3333);

console.log(`App Backend started on port 3333`)