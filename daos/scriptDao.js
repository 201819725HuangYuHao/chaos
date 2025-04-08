const sequelize = require("../daos/db");
const Script = require("../models/Script");

(async () => {
  try {
    await sequelize.sync();
    console.log("Database synchronized");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
})();

async function getAllScripts() {
  return Script.findAll();
}

async function createScript(name, content) {
  return Script.create({ name, content });
}

module.exports = {
  getAllScripts,
  createScript,
};
