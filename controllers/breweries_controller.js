const Breweries = require("../models").Breweries;

exports.getAll = (req, res) => {
    Breweries.findAll()
        .then(breweries => res.status(200).json(breweries))
        .catch(err => res.status(500).json(err))
}
