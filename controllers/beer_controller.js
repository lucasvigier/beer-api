const {Op} = require("sequelize");
const Beer = require("../models").Beer;

// GET all beers
exports.getAll = (req, res) => {
    Beer.findAll()
        .then(beer => res.status(200).json(beer))
        .catch(err => res.status(500).json(err))
}

// GET beers by the beer id
exports.getById = (req, res) => {
    Beer.findAll({where: {id: req.params.id}})
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

// GET beers under a specific alcohol content
exports.getUnderAlcoholContent = (req, res) => {
    Beer.findAll({where: {alcohol: {[Op.lte]: req.query.alcohol}}})
        .then(beer => res.status(200).json(beer))
        .catch(err => res.status(500).json(err))
}

// GET beers above a specific alcohol content
exports.getAboveAlcoholContent = (req, res) => {
    Beer.findAll({where: {alcohol: {[Op.gte]: req.query.alcohol}}})
        .then(beer => res.status(200).json(beer))
        .catch(err => res.status(500).json(err))
}

// PUT add a beer with attributes
exports.addBeer = (req, res) => {
    Beer.create({
        name: req.body.name,
        alcohol: req.body.alcohol,
        brewer: req.body.brewer,
        country: req.body.country
    })
        .then(beer => {
            res.status(201).json(beer)
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).json(err)
        })
}

// DELETE destroy a beer object with his id
exports.deleteBeer = (req, res) => {
    Beer.destroy({where: {id: req.params.id}})
        .then(res.status(200).json())
        .catch(err => {
            if (err) {
                res.status(500).json(err)
            } else {
                res.status(404).json({error: '[ERROR]: Beer not found'})
            }
        })
}

// SET the name of the beer with the given id
exports.setName = (req, res) => {
    Beer.findOne({where: {id: id}})
        .then(beer => {
            beer.update({name: req.body.name}, {
                where: {name: req.body.name}
            }).then(beer => {
                res.status(200).json()
            })
        })
        .catch(err => {
            if (err) {
                res.status(500).json(err)
            } else {
                res.status(404).json({error: '[ERROR]: Beer not found'})
            }
        })
}

// SET the alcohol content of the beer with the given id
exports.setAlcoholContent = (req, res) => {
    Beer.findOne(req.query.id)
        .then(beer => {
            beer.alcohol = req.body.alcohol
            beer.save().then(() => res.status(200).json())
        })
        .catch(err => {
            if (err) {
                res.status(500).json(err)
            } else {
                res.status(404).json({error: '[ERROR]: Beer not found'})
            }
        })
}

// SET the brewer of the beer with the given id
exports.setBrewer = (req, res) => {
    Beer.findOne(req.query.id)
        .then(beer => {
            beer.brewer = req.body.brewer
            beer.save().then(() => res.status(200).json())
        })
        .catch(err => {
            if (err) {
                res.status(500).json(err)
            } else {
                res.status(404).json({error: '[ERROR]: Beer not found'})
            }
        })
}

// SET the country of the beer with the given id
exports.setCountry = (req, res) => {
    Beer.findOne(req.query.id)
        .then(beer => {
            beer.country = req.body.country
            beer.save().then(() => res.status(200).json())
        })
        .catch(err => {
            if (err) {
                res.status(500).json(err)
            } else {
                res.status(404).json({error: '[ERROR]: Beer not found'})
            }
        })
}
