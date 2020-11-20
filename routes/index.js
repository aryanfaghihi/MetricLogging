const express = require('express');
const metrics =require("./metrics")
const router = express.Router();
router.use("/metric",metrics)

module.exports = router;
