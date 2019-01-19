require('./db/db');

const express = require('express');
const app = express();
const methodOverride = require('method-override');

const bodyParser = require('body-parser');


app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));




app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});