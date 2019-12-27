const DB = require("./db");

async function getCityName() {
  return await DB.get("SELECT * FROM citymaster");
}
async function getPinCode() {
  return await DB.get("SELECT * FROM pincodemaster");
}
module.exports = {
  getCityName,
  getPinCode
};
