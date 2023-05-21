const { Trip } = require("../../../models/bike");

const funcGetTotalPage = async (obj, limit) =>
  Math.ceil((await Trip.find( obj ?? {})).length / limit).toString() ??
  "0";

module.exports = funcGetTotalPage;
