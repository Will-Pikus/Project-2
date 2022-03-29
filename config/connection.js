require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: process.env.MYSQL_HOST,
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
      production: {
        use_env_variable: JAWSDB_URL,
        dialect: 'mysql'
      }
    });

module.exports = sequelize;
