const express = require('express');
const router = express.Router();
const breweriesController = require('../controllers/breweries_controller');

/* GET breweries methods. */
router.get('/', breweriesController.getAll);
router.get('/id', breweriesController.getById);
router.get('/name', breweriesController.getByName);
router.get('/country', breweriesController.getByCountry);

module.exports = router;
