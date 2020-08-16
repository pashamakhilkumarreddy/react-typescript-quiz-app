const {
  User,
} = require('../models');
const {
  genUsername,
} = require('../utils');

module.exports = {
  async register(ctx) {
    try {
      const {
        email,
        password,
      } = ctx.request.body;
      const user = await User.findOne({
        email,
      });
      if (!user) {
        const username = genUsername();
        const newUser = new User({
          email,
          username,
          password,
        });
        if (!newUser) {
          throw new Error('Unable to create a new user!');
        }
        await newUser.save();
        ctx.response.status = 201;
        ctx.body = {
          success: true,
          status: 201,
          statusMessages: [
            'Successfully created a new user',
          ],
        };
        return;
      }
      ctx.response.status = 403;
      ctx.body = {
        success: false,
        status: 403,
        statusMessages: [
          'A user already exists with the given email',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        success: false,
        status: 500,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
  async login(ctx) {
    try {
      const {
        email,
        password,
      } = ctx.request.body;
      const user = await User.findOne({
        email,
      });
      if (!user) {
        ctx.response.status = 401;
        ctx.body = {
          success: false,
          status: 401,
          statusMessages: [
            'No user found with the given email',
          ],
        };
        return;
      }
      const isUserAuthenticated = await user.comparePassword(password);
      if (!isUserAuthenticated) {
        ctx.response.status = 403;
        ctx.body = {
          status: 403,
          success: false,
          statusMessages: [
            'Login information is incorrect. Please check your password.',
          ],
        };
        return;
      }
      ctx.response.status = 200;
      ctx.body = {
        status: 200,
        success: true,
        user: user.formattedUserObj(),
        tokens: {
          refreshToken: user.createRefreshToken(),
          accessToken: user.createAccessToken(),
        },
        statusMessages: [
          'Login is successfull',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        success: false,
        status: 500,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
};
