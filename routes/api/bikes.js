const express = require("express");

const { getBikesInfo } = require("../../controlers/bike");
const { check } = require("../../utils");

const router = express.Router();

router.get("/", check(getBikesInfo));

module.exports = router;
