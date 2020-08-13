const Router = require('koa-router');
const {
  login,
  register,
} = require('../controllers');
const {
  validateAuthFields,
} = require('../middleware');

const router = new Router();

router.post('/register', validateAuthFields, register);
router.post('/login', validateAuthFields, login);

module.exports = router;
