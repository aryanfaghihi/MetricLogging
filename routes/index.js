const express = require('express');
const metrics =require("./metrics")
const router = express.Router();
/* GET home page. */
router.use("/metric",metrics)

module.exports = router;
