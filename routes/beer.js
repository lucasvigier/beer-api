const express = require('express');
const router = express.Router();
const beerController = require('../controllers/beer_controller');

/* GET beers listing. */
router.get('/', beerController.getAll);
router.get('/country', beerController.getByCountry);
router.get('/name', beerController.getByName);

module.exports = router;
