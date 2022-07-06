const express = require('express')
const error = require('../middleware/error.middleware');
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(error.handler);
module.exports = app;
