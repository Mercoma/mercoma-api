// === Packages ===
const express = require('express'),
    cors = require('cors'),
    cookieSession = require('cookie-session'),
    path = require('path');

// === App Config ===
const app = express(),
    buildDirectory = path.join(__dirname, '..', 'build'),
    passport = require('./auth');

app.use(
    cookieSession({
        cookie: {
            maxAge: 24 * 60 * 60 * 1000,
        },
        name: 'session',
        keys: ['beee89b4', '89b4beee'],
        secure: false,
    }),
);
app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(buildDirectory));
app.use(passport.initialize());
app.use(passport.session());

// === Routes ===
app.use('/api', require('./routes'));

app.get('*', (req, res) => {
    res.sendFile(path.join(buildDirectory, 'index.html'));
});

module.exports = app;

// === Todo ===
// http post images to backend
// Implement ML Model
// test betterdoctors api for the last time or else use jsonplaceholder
