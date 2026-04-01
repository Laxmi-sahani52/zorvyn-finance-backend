const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Record = sequelize.define('Record', {
  amount: { type: DataTypes.DECIMAL, allowNull: false },
  category: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.ENUM('income', 'expense'), allowNull: false },
  date: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW }
});

module.exports = Record;