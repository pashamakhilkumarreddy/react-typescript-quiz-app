require('dotenv').config();

const environment = process.env.NODE_ENV || 'development';

module.exports = {
  server: {
    PORT: process.env.PORT || 5000,
    HOST: process.env.HOST || (environment === 'production'
      ? '127.0.0.1' : '0.0.0.0'),
  },
  db: {
    mongo: {
      DB_HOST: process.env.MONGO_HOST || '127.0.0.1',
      DB_PORT: process.env.MONGO_PORT || '27017',
      DB_USER: process.env.MONGO_USER || 'test',
      DB_PASSWORD: process.env.MONGO_PASSWORD || 'test',
      DB_NAME: process.env.MONGO_DBNAME || 'test',
    },
    redis: {
      REDIS_HOST: process.env.REDIS_HOST || '127.0.0.1',
      REDIS_PORT: process.env.REDIS_PORT || '6379',
      REDIS_PASSWORD: process.env.REDIS_PASSWORD || '',
    },
  },
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET || 'test',
    JWT_REFRESH_TOKEN_EXPIRY: process.env.JWT_REFRESH_TOKEN_EXPIRY || '30d',
    JWT_ACCESS_TOKEN_EXPIRY: process.env.JWT_ACCESS_TOKEN_EXPIRY || '30m',
    JWT_ISSUER: process.env.JWT_ISSUER || 'test',
  },
};
