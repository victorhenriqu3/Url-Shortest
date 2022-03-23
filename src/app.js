const express = require("express");
const app = express();
const urlsRoutes = require('./Routes/index')

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(urlsRoutes);

module.exports = app 