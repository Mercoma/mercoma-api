// === Packages ===
const express = require('express'),
    cors = require('cors'),
    path = require('path');

// === App Config ===
const app = express(),
    buildDirectory = path.join(__dirname, '..', 'build');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(buildDirectory));

// === Routes ===
app.use('/api', require('./routes'));

app.get('*', (req, res) => {
    res.sendFile(path.join(buildDirectory, 'index.html'));
});

module.exports = app;

// === Todo ===
// Authentication
// Get images routes
// http post images to backend
// Implement ML Model
// test betterdoctors api for the last time or else use jsonplaceholder
