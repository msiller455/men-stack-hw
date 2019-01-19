require('./db/db');
const express = require('express');
const app = express();


const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const beersRouter = require('./routes/beers');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/beers', beersRouter);

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});