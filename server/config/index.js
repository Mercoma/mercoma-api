if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const Sequelize = require('sequelize');
const connectionURI = process.env.DATABASE_URL;

const db = new Sequelize(connectionURI, {
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

module.exports = db;
