const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect
});

const User = sequelize.define('user', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  event: DataTypes.STRING
});

sequelize.sync(); // Creates table if it doesn't exist

module.exports = { User, sequelize };
