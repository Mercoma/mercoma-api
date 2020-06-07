// === Packages ===
const express = require('express'),
    cors = require('cors'),
    cookieParser = require('cookie-parser'),
    // cookieSession = require('cookie-session'),
    session = require('express-session'),
    path = require('path');

// === App Config ===
const app = express(),
    buildDirectory = path.join(__dirname, '..', 'build'),
    passport = require('./auth');
    
app.use(cookieParser('awdawdawdawdawd'));
app.use(
    session({
        secret: 'awdawdawdawdawd',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: false,
            sameSite: false,
            secure: false,
            path: '/',
        },
    }),
);
app.use(cors({ credentials: true, origin: true }));
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
