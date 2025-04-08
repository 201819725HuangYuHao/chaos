const sequelize = require("../daos/db");
const { DataTypes } = require("sequelize");

const Script = sequelize.define("Script", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
  },
});

module.exports = Script;
