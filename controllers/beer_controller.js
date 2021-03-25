const Beer = require("../models").Beer;

exports.getAll = (req, res) => {
    Beer.findAll()
        .then(beer => res.status(200).json(beer))
        .catch(err => res.status(500).json(err))
}

exports.getByCountry = (req, res) => {
    Beer.findAll({where: {country: req.query.country}})
        .then(beer => res.status(200).json(beer))
        .catch(err => res.status(500).json(err))
}

exports.getByName = (req, res) => {
    Beer.findAll({where: {name: req.query.name}})
        .then(beer => res.status(200).json(beer))
        .catch(err => res.status(500).json(err))
}
