const express = require("express");
const route = express.Router();
const XLSX = require("xlsx");

const upload = require("../multer");

const {
  uploadStateMaster,
  uploadCityMaster,
  uploadPinCodeMaster
} = require("../dataBase/uploads_db");

route.post("/api/uploadStateFile", async (req, res) => {
  await upload(req, res, async err => {
    if (err) {
      var error = ["File Not Supported"];
      res.json(error);
      return;
    }
    if (!req.file) {
      res.json("No file passed");
      return;
    }
    const workbook = XLSX.readFile(req.file.path);
    const sheet_name_list = workbook.SheetNames;
    var uploadResult;
    for (let i = 0; i < sheet_name_list.length; i++) {
      const result = XLSX.utils.sheet_to_json(
        workbook.Sheets[sheet_name_list[i]]
      );
      uploadResult = await uploadStateMaster(result);
    }
  });
  return;
});

module.exports = route;
