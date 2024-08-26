const Sequelize  = require("sequelize"); // Correct import with capital 'S'
const dbConfig = require("../config/config.json"); // Correct import for the config file

const dbConnect = new Sequelize(
  dbConfig.database, // Database name
  dbConfig.username, // Database username
  dbConfig.password, // Database password
  {
    dialect: dbConfig.dialect
  }
);

// Sync all models with the database
dbConnect.sync({});

module.exports = dbConnect;
