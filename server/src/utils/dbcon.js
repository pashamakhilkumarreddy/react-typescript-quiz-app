const mongoose = require('mongoose');
const {
  db: {
    mongo: {
      DB_HOST,
      DB_PORT,
      DB_NAME,
      DB_USER,
      DB_PASSWORD,
    },
  },
} = require('../config');

const getDBURI = ({
  dbHost = DB_HOST,
  dbPort = DB_PORT,
  dbName = DB_NAME,
  dbUser = DB_USER,
  dbPassword = DB_PASSWORD,
}) => {
  const uri = `mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}?authSource=admin`;
  return Promise.resolve(uri);
};

const connectToDB = (dbURI) => {
  try {
    const mongoOptions = {
      user: DB_USER,
      pass: DB_PASSWORD,
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      // reconnectTries: Number.MAX_VALUE,
      // reconnectInterval: 500,
      connectTimeoutMS: 10000,
    };
    return Promise.resolve(mongoose.connect(dbURI, mongoOptions));
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = {
  getDBURI,
  connectToDB,
};
