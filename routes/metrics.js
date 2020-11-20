const express = require('express');
const { setMetric,getMetric } = require('../controllers/MetricsController');
const router = express.Router();

router.post("/:key",setMetric)
router.get("/:key/sum",getMetric)

module.exports = router;
