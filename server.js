const express = require('express');
const app = express();
const logs = require('./models/logs.js');


//Middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended:false}));


//New Route
app.get('/logs/new', (req, res) => {
    res.render('New');
});

//Create Route
app.post('/logs', (req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? true : false;
    res.send(req.body);
})




app.listen(3000, () => {
    console.log('listening');
});

