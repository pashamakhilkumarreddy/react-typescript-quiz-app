const AuthController = require('./AuthController');
const ProfileController = require('./ProfileController');

module.exports = {
  ...AuthController,
  ...ProfileController,
};
