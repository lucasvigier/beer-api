const express = require('express');
const router = express.Router();
const beerController = require('../controllers/beer_controller');

/* GET beers methods routes. */
router.get('/', beerController.getAll);
router.get('/name', beerController.getByName);
router.get('/brewer', beerController.getByBrewerName);
router.get('/country', beerController.getByCountry);
router.get('/underAlcoholContent', beerController.getUnderAlcoholContent);
router.get('/aboveAlcoholContent', beerController.getAboveAlcoholContent);

/* PUT beers method route. */
router.put('/addBeer', beerController.addBeer);

/* DELETE beers method route with short URL. */
router.delete('/deleteBeer/:id', beerController.deleteBeer);

/* GET beers id method route with short URL. */
router.get('/:id', beerController.getById);

module.exports = router;
