module.exports = {
  async getProfile(ctx) {
    try {
      ctx.response.status = 200;
      ctx.body = {
        status: 200,
        success: true,
        statusMessages: [
          'Successfully fetched user profile',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        status: 500,
        success: false,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
  async updateProfile(ctx) {
    try {
      ctx.response.status = 200;
      ctx.body = {
        status: 200,
        success: true,
        statusMessages: [
          'Successfully updated profile',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        status: 500,
        success: false,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
};
