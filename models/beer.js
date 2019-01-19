const mongoose  = require('mongoose');

const beerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    style: String,
    appearance: String,
    aroma: String,
    flavor: String,
    ABV: Number,
    IBU: Number
});

const Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;