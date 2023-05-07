const { Trip } = require("../../../models/bike");

const funcGetTotalPage = async () =>
  Math.ceil((await Trip.find({})).length / 20) ?? 0;

module.exports = funcGetTotalPage;
