const scriptDao = require("../daos/scriptDao");

async function getAllScripts() {
  return scriptDao.getAllScripts();
}

async function createScript(name, content) {
  return scriptDao.createScript(name, content);
}

module.exports = {
  getAllScripts,
  createScript,
};
