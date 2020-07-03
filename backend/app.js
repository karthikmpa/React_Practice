const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userLogin = require('./route/user.js');


const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use( cors() );

mongoose.connect('mongodb://karthik:karthik@cluster0-shard-00-00.ady5a.mongodb.net:27017,cluster0-shard-00-01.ady5a.mongodb.net:27017,cluster0-shard-00-02.ady5a.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-9laq9x-shard-0&authSource=admin&retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then( (success)=> {
        console.log(success + 'Success connecting');
    })
    .catch( (err) => {
        console.log(err);
    });

app.use('/assets', express.static(path.join('backend/assets')));

app.use('/api/', userLogin);


module.exports = app;