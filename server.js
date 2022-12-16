const express = require('express');
const app = express();
const logs = require('./models/logs.js');


//Middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//New Route
app.get('/logs/new', (req, res) => {
    res.render('New');
});





app.listen(3000, () => {
    console.log('listening');
});

