require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Logs = require('./models/logs.js');
const methodOverride = require('method-override');


//Middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended:false}));

app.use(methodOverride('_method'));


//Connecting to mongoose
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});


//Seed Route
app.get('/logs/seed', (req, res) => {
    const seededLogs = [
        {title: 'Take off', entry: 'Ship has taken off into space.', shipIsBroken: false},
        {title: 'Asteroid belt', entry: 'We seem to have entered an asteroid belt. Ship recieved some damage.', shipIsBroken: true},
        {title: 'Repair', entry: 'Crewmates are continuing to repair the ship. Should be several days before we can continue our journey. ', shipIsBroken: true},
        {title: 'New planet discovered', entry: 'Ship sensored have detected a planet that could possibly hold life. Proceeding to investigate.', shipIsBroken: false},
    ];
    Logs.deleteMany({}).then((data) => {
        Logs.create(seededLogs).then((data) => {
            res.redirect('/logs');
        });
    });
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

//Update
app.put('/logs/:id', (req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? true : false;
    Logs.findByIdAndUpdate(req.params.id, req.body, (err, updatedLogs) => {
        res.redirect(`/logs/${req.params.id}`);
    })
})

//Show Route
app.get('/logs/:id', (req, res) => {
    Logs.findById(req.params.id, (err, foundLogs) =>{
        res.render('Show', {logs: foundLogs});
    });
});

//Delete Route
app.delete('/logs/:id', (req, res) => {
    Logs.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/logs');
    });
});

//Edit Route
app.get('/logs/:id/edit', (req, res) => {
    Logs.findById(req.params.id, (err, foundLogs) => {
        res.render('Edit', {logs: foundLogs});
    });
});


app.listen(3000, () => {
    console.log('listening');
});

