const uuidv1 = require("uuid/v1");
const DB = require("./db");

async function uploadStateMaster(data) {
  for (let i = 0; i < data.length; i++) {
    const id = uuidv1();
    const query = {
      text: `INSERT INTO stateMaster (id,stateCode,stateName)
        VALUES ($1, $2, $3)`,
      values: [id, data[i].STATECODE, data[i].STATENAME]
    };
    await DB.mutate(query);
  }
}

async function uploadCityMaster(data) {
  for (let i = 0; i < data.length; i++) {
    const id = uuidv1();

    const query = {
      text: `INSERT INTO stateMaster (id,cityCode,cityName,stateCode)
        VALUES ($1, $2, $3,$4)`,
      values: [id, data[i].CITYCODE, data[i].CITYNAME, data[i].STATECODE]
    };
    await DB.mutate(query);
  }
}

async function uploadPinCodeMaster(data) {
  for (let i = 0; i < data.length; i++) {
    const id = uuidv1();
    const query = {
      text: `INSERT INTO stateMaster (id,stateName,cityName,pinCode)
        VALUES ($1, $2, $3,$4)`,
      values: [id, data[i].STATENAME, data[i].CITYNAME, data[i].PINCODE]
    };
    await DB.mutate(query);
  }
}

module.exports = {
  uploadStateMaster,
  uploadCityMaster,
  uploadPinCodeMaster
};
