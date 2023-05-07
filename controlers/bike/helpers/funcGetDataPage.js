const { Trip } = require("../../../models/bike");

const funcGetDataPage = async (pagination) => {
  return await Trip.find({}, null, pagination ?? {});
};

module.exports = {
  funcGetDataPage,
};
