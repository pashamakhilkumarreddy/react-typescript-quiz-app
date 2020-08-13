const {
  v1: uuidv1,
} = require('uuid');

const genUsername = () => {
  const username = uuidv1();
  return username;
};

module.exports = {
  genUsername,
};
