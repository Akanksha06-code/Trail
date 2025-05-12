const express = require('express');
const { getDashboardData } = require('../controllers/dashboardController');
const { Protect } = require('../middleware/authmiddleware');

const router = express.Router();

router.get('/', Protect, getDashboardData);

module.exports = router;