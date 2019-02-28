const express = require('express');
// const logger = require('morgan');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

const app = express();
app.use(express.static("public"));

// app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/MongoTimesMedia';

mongoose.connect(MONGODB_URI);

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require('./routes/routes')(app);

app.listen(port, () => {
    console.log('Server listening on Port:' + port);
});