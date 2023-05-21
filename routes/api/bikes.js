const express = require("express");

const {
  getBikesInfo,
  getBikesFiltered,
  getBikesFinded,
  getBikesAllStation
} = require("../../controlers/bike");

const { check } = require("../../utils");

const router = express.Router();

router.get("/", check(getBikesInfo));

router.get("/allStations", check(getBikesAllStation));

router.get("/filter/:to", check(getBikesFiltered));

router.get("/find/:station", check(getBikesFinded));

module.exports = router;
