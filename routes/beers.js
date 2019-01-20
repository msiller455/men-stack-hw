const express = require('express');
const router = express.Router();

//This is the model data
const Beer = require('../models/beer');

//Index Route
router.get('/', (req, res) => {
    Beer.find({}, (err, allBeers) => {
        if(err) {
            console.log(err);
        } else {
            res.render('./beers/index.ejs', {
                beers: allBeers
            });
        }
    });
});

//New Route
router.get('/new', (req, res) => {
    res.render('./beers/new.ejs');
});

//Create Route
router.post('/', (req, res) => {
    Beer.create(req.body, (err, newBeer) => {
        if(err) {
            res.send(err);
        } else {
            console.log(newBeer + ' cheers!');
            res.redirect('/beers');
        }
    })
});

//Edit Route
router.get('/:id/edit', (req, res) => {
    Beer.findById(req.params.id, (err, foundBeer) => {
        if(err) {
            console.log(err);
        } else {
            console.log(foundBeer);
            res.render('./beers/edit.ejs', {
                beer: foundBeer
            });
        }
    });
});

//Update Route
router.put('/:id', (req, res) => {

});

//Show Route
router.get('/:id', (req, res) => {
    Beer.findById(req.params.id, (err, foundBeer) => {
        if(err) {
            console.log(err);
        } else {
            console.log(foundBeer);
            res.render('./beers/show.ejs', {
                beer: foundBeer
            });
        }
    });
});

//Delete Route
router.delete('/:id', (req, res) => {
    Beer.findOneAndRemove(req.params.id, (err, deletedBeer) => {
        if(err) {
            console.log(err);
        } else {
            console.log(deletedBeer);
            res.redirect('/beers');
        }
    });
});

module.exports = router;