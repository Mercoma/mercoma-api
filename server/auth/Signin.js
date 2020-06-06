const bcrypt = require('bcrypt'),
    LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

// When a user signs in, do this
const signinStrategy = new LocalStrategy(
    { passReqToCallback: true, usernameField: 'email' },
    (req, email, password, done) => {
        User.findOne({
            where: {
                email,
            },
        })
            .then((user) => {
                let passwordValid;
                if (user) {
                    passwordValid = bcrypt.compareSync(
                        password,
                        user.password,
                    );
                }
                if (!user || !passwordValid) {
                    return done('Email or Password not found', null);
                } else {
                    return done(null, user);
                }
            })
            .catch((err) => {
                return done(err, null);
            });
    },
);

module.exports = signinStrategy;
