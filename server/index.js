// === Packages ===
const express = require('express'),
    path = require('path');

// === App Config ===
const app = express(),
    buildDirectory = path.join(__dirname, '..', 'build');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(buildDirectory));

// === Routes ===
app.use('/api', require('./routes'));

app.get('*', (req, res) => {
    res.sendFile(path.join(buildDirectory, 'index.html'));
});

module.exports = app;
