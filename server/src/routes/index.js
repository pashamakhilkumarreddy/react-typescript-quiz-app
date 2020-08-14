const auth = require('./auth');
const profile = require('./profile');

module.exports = ({
  app,
}) => {
  app.use(auth.routes());
  app.use(auth.allowedMethods());
  app.use(profile.routes());
  app.use(profile.allowedMethods());
};
