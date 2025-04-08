const projectDao = require("../daos/projectDao");

async function getAllProjects() {
  return projectDao.getAllProjects();
}

async function createProject(name, description) {
  return projectDao.createProject(name, description);
}

module.exports = {
  getAllProjects,
  createProject,
};
