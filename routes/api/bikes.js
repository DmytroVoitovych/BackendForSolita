const express = require("express");

const {
  getBikesInfo,
  getBikesFiltered,
  getBikesFunded,
  getBikesAllStation,
  getStationStatistic
} = require("../../controllers");

const { check } = require("../../utils");

const router = express.Router();

router.get("/", check(getBikesInfo));

router.get("/allStations", check(getBikesAllStation));

router.get("/filter/:to", check(getBikesFiltered));

router.get("/find/:station", check(getBikesFunded));

router.get("/statistic/:id", check(getStationStatistic));

module.exports = router;
