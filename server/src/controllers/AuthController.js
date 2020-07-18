module.exports = {
  async login(ctx) {
    try {
      ctx.response.status = 200;
      ctx.body = {
        error: false,
        status: 200,
        statusMessages: [
          'Internal server error',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        error: true,
        status: 500,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
  async register(ctx) {
    try {
      ctx.response.status = 201;
      ctx.body = {
        error: false,
        status: 200,
        statusMessages: [
          'Internal server error',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        error: true,
        status: 500,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
};
