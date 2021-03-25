const Breweries = require("../models").Breweries;

// GET all breweries
exports.getAll = (req, res) => {
    Breweries.findAll()
        .then(breweries => res.status(200).json(breweries))
        .catch(err => res.status(500).json(err))
}

// GET all breweries by id
exports.getById = (req, res) => {
    Breweries.findAll({where: {id: req.query.id}})
        .then(breweries => res.status(200).json(breweries))
        .catch(err => res.status(500).json(err))
}

// GET all breweries by name
exports.getByName = (req, res) => {
    Breweries.findAll({where: {breweries: req.query.breweries}})
        .then(breweries => res.status(200).json(breweries))
        .catch(err => res.status(500).json(err))
}

// GET all breweries by a specific country
exports.getByCountry = (req, res) => {
    Breweries.findAll({where: {country: req.query.country}})
        .then(breweries => res.status(200).json(breweries))
        .catch(err => res.status(500).json(err))
}
