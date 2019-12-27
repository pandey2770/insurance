const express = require("express");
const route = express.Router();
const { getCityName, getPinCode } = require("../dataBase/staticData_db");

route.get("/api/getCityName", async (req, res) => {
  const data = await getCityName();
  res.json(data);
});
route.get("/api/getPinCode", async (req, res) => {
  const data = await getPinCode();
  res.json(data);
});
module.exports = route;
