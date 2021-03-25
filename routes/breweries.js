const express = require('express');
const router = express.Router();
const breweriesController = require('../controllers/breweries_controller');

/* GET breweries listing. */
router.get('/', breweriesController.getAll);

module.exports = router;
