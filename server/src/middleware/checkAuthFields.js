const {
  isValidEmail,
  isValidPassword,
  emptyEmailText,
  emptyPasswordText,
} = require('../utils');

module.exports = {
  validateAuthFields(ctx, next) {
    try {
      const {
        email = '',
        password = '',
      } = ctx.request.body;
      const errors = [];
      const trimmedEmail = email && (typeof email === 'string') && email.trim();
      const trimmedPassword = password && (typeof password === 'string') && password.trim();
      if (!trimmedEmail) {
        errors.push(emptyEmailText);
      }
      if (!trimmedPassword) {
        errors.push(emptyPasswordText);
      }
      if (errors.length) {
        ctx.response.status = 401;
        ctx.body = {
          success: false,
          status: 401,
          statusMessages: [
            ...errors,
          ],
        };
        return;
      }
      const validEmail = isValidEmail(trimmedEmail);
      const validPassword = isValidPassword(trimmedPassword);
      if (!validEmail.isValid) {
        errors.push(validEmail.message);
      }
      if (!validPassword.isValid) {
        errors.push(validPassword.message);
      }
      if (errors.length) {
        ctx.response.status = 401;
        ctx.body = {
          success: false,
          status: 401,
          statusMessages: [
            ...errors,
          ],
        };
        return;
      }
      ctx.request.body.email = trimmedEmail;
      ctx.request.body.password = trimmedPassword;
      return next(); // eslint-disable-line consistent-return
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
