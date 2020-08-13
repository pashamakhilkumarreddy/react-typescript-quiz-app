const {
  emailRegex,
  passwordRegex,
} = require('./regex');
const {
  inValidEmailText,
  inValidPasswordText,
} = require('./constants');

const isValidEmail = (email) => {
  const message = Object.seal({
    isValid: false,
    message: inValidEmailText,
  });
  if (!email || !(typeof email === 'string') || !email.trim()) {
    return message;
  }
  return {
    ...message,
    isValid: emailRegex.test(email),
  };
};

const isValidPassword = (password) => {
  const message = Object.seal({
    isValid: false,
    message: inValidPasswordText,
  });
  if (!password || !(typeof password === 'string') || !password.trim()) {
    return message;
  }
  return {
    ...message,
    isValid: passwordRegex.test(password),
  };
};

module.exports = {
  isValidEmail,
  isValidPassword,
};
