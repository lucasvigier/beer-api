const express = require('express');
const router = express.Router();
const beerController = require('../controllers/beer_controller');

/* GET beers methods. */
router.get('/', beerController.getAll);
router.get('/country', beerController.getByCountry);
router.get('/name', beerController.getByName);
router.get('/id', beerController.getById);
router.get('/brewer', beerController.getByBrewerName);

module.exports = router;
