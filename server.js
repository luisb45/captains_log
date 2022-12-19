require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Logs = require('./models/logs.js');

//Middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended:false}));

//Connecting to mongoose
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});


//Index Route
app.get('/logs', (req, res) => {
    Logs.find({}, (error, allLogs) => {
        res.render('Index', {logs: allLogs});
    });
});

//New Route
app.get('/logs/new', (req, res) => {
    res.render('New');
});

//Create Route
app.post('/logs', (req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? true : false;
    Logs.create(req.body, (error, createdLogs) => {
        res.redirect('/logs');
    });
});

//Show Route
app.get('/logs/:id', (req, res) => {
    Logs.findById(req.params.id, (err, foundLogs) =>{
        res.render('Show', {logs: foundLogs});
    });
});


app.listen(3000, () => {
    console.log('listening');
});

