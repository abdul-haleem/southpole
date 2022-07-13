const express = require('express')
const error = require('../middleware/error.middleware');
const mongoose = require('./db');
const app = express();
mongoose.connect(); 
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(error.handler);
module.exports = app;