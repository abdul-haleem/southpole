const express = require('express')
const mongoose = require('./db');
const passport = require('passport');
const cors = require('cors');

require('./passport')

const app = express();
mongoose.connect(); 
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())
app.use(passport.initialize());
module.exports = app;