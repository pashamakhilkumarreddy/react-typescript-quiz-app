/*
  eslint-disable no-useless-escape, max-len
*/
const usernameRegex = /^[a-zA-Z]{8,120}$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
const phoneRegex = /^[0-9]{10}$/;

module.exports = {
  usernameRegex,
  emailRegex,
  passwordRegex,
  phoneRegex,
};
