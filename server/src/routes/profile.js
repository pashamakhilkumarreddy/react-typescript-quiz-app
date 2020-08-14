const Router = require('koa-router');
const {
  getProfile,
  updateProfile,
} = require('../controllers');

const router = new Router();

router.get('/profile', getProfile);
router.patch('/profile', updateProfile);

module.exports = router;
