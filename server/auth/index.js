const passport = require('passport');
const User = require('../models/User');

passport.serializeUser((user, done) => {
    done(null, user.email);
});

// provides req.user to entire server
passport.deserializeUser((email, done) => {
    User.findOne({ where: { email } })
        .then((user) => {
            done(null, user);
        })
        .catch((err) => {
            done(err, null);
        });
});

// Import all strategies
const SigninStrategy = require('./Signin');
const SignupStrategy = require('./Signup');

passport.use('local-signin', SigninStrategy);
passport.use('local-signup', SignupStrategy);

module.exports = passport;
