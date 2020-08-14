const checkAuthFields = require('./checkAuthFields');
const isAuthenticated = require('./isAuthenticated');

module.exports = {
  ...checkAuthFields,
  ...isAuthenticated,
};
