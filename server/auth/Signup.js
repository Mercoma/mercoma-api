const bcrypt = require('bcrypt'),
    LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

// When a user signs up, do this
const SignupStrategy = new LocalStrategy(
    { passReqToCallback: true, usernameField: 'email' },
    (req, username, password, done) => {
        User.findOne({
            where: {
                email: username,
            },
        })
            .then((user) => {
                if (!user) {
                    const salt = bcrypt.genSaltSync(10);
                    const hash = bcrypt.hashSync(password, salt);
                    const { avatar, firstname, lastname } = req.body;
                    User.create({
                        email: username,
                        password: hash,
                        firstname,
                        lastname,
                    })
                        .then(newUser => {
                            return done(null, newUser);
                        })
                        .catch((err) => {
                            return done(err, null);
                        });
                } else {
                    return done('user already exists', null);
                }
            })
            .catch((err) => {
                return done(err, null);
            });
    },
);

module.exports = SignupStrategy;
