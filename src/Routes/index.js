const express = require('express');
const shortid = require("shortid");
const urlRouter = express.Router();
const db = require("../Services/db");

// Index Route: Route responsible for the welcome API.
urlRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to URL Shortest App" });
});

// Encode Route : Route responsible for receiving the url that will be stored.
urlRouter.post('/encode', async (req, res) => {
  const short = shortid.generate()
  const body = { id: short, url: req.body.url }
  const results = await db.insertUrls(body)

  res.status(201).json(body);
})

// Decode Route : Route responsible for returning the stored url according to the requested id
urlRouter.get('/decode/:id?', async (req, res) => {
  const params = req.params;
  const clientes = await db.selectId(params);
  res.status(200).json(clientes);
})

module.exports = urlRouter;

