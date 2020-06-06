const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

// When a user signs in, do this
const signinStrategy = new LocalStrategy(
    (username, password, done) => {},
);

module.exports = signinStrategy;
