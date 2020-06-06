const passport = require('passport');

// Import all strategies
const SigninStrategy = require('./Signin');
const SignupStrategy = require('./Signup');
// const GoogleStrategy = require('./Google');

passport.use('local-signin', SigninStrategy);
passport.use('local-signup', SignupStrategy);
// passport.use('google', GoogleStrategy);

module.exports = passport;
