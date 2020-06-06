const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Image = sequelize.define('images', {
    image: {
        type: DataTypes.BLOB,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tumorPct: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Image;
