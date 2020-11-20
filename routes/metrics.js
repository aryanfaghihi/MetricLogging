const express = require('express');
const { setMetric } = require('../controllers/metricsController');
const router = express.Router();

router.post("/:key",setMetric)

module.exports = router;
