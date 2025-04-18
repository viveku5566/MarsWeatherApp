const express = require('express');
const router = express.Router();
const { getPaginatedWeather } = require('../controllers/weatherController');

router.get('/', getPaginatedWeather);

module.exports = router;
