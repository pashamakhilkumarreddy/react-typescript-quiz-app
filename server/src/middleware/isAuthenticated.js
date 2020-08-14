module.exports = {
  isUserAuthenticated(ctx, next) { // eslint-disable-line consistent-return
    try {
      return next();
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
