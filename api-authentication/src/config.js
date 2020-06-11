const process = require('dotenv').load();

params = {
  env      : process.env.NODE_ENV,
  password : process.env.PASSWORD,
  version  : process.env.VERSION,  
  database = process.env.DB_MONGO_DATABASE,
  username = process.env.DB_MONGO_USERNAME,
  password = process.env.DB_MONGO_PASSWORD,
  hostname = process.env.DB_MONGO_HOSTNAME,
  port = process.env.DB_MONGO_PORT,
}

module.exports = params;