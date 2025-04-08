const sequelize = require("../daos/db");
const Project = require("../models/Project");

(async () => {
  try {
    await sequelize.sync();
    console.log("Database synchronized");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
})();

async function getAllProjects() {
  return Project.findAll();
}

async function createProject(name, description) {
  return Project.create({ name, description });
}

module.exports = {
  getAllProjects,
  createProject,
};
