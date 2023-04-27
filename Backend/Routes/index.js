const express = require("express");
const router = express.Router();
const Data = require('../Routes/data')
router.use("/data",Data)

module.exports = router;