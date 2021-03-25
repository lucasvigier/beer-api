const Beer = require("../models").Beer;

// GET all beers
exports.getAll = (req, res) => {
    Beer.findAll()
        .then(beer => res.status(200).json(beer))
        .catch(err => res.status(500).json(err))
}

// GET beers by the beer id
exports.getById = (req, res) => {
    Beer.findAll({where: {id: req.query.id}})
        .then(beer => res.status(200).json(beer))
        .catch(err => res.status(500).json(err))
}

// GET beers by the beer name
exports.getByName = (req, res) => {
    Beer.findAll({where: {name: req.query.name}})
        .then(beer => res.status(200).json(beer))
        .catch(err => res.status(500).json(err))
}

// GET beers by the brewer name
exports.getByBrewerName = (req, res) => {
    Beer.findAll({where: {brewer: req.query.brewer}})
        .then(beer => res.status(200).json(beer))
        .catch(err => res.status(500).json(err))
}

// GET beers by a specific country
exports.getByCountry = (req, res) => {
    Beer.findAll({where: {country: req.query.country}})
        .then(beer => res.status(200).json(beer))
        .catch(err => res.status(500).json(err))
}
