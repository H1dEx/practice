require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');

const PORT = process.env.PORT || 5002;
const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log('Server has been started on port ' + PORT)
    })
  } catch (e) {
    console.log(e)
  }
}

start();
