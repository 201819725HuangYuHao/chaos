const sequelize = require("../daos/db");
const { DataTypes } = require("sequelize");

const Project = sequelize.define("Project", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Project;
