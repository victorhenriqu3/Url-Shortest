const express = require("express");
const app = express();
const db = require("./Services/db");
const port = 3000;
const shortid = require("shortid");

(async () => {
  console.log('Começou!');
  console.log('SELECT * FROM CLIENTES');
  const clientes = await db.selectUrls();
  console.log(clientes);
})();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to URL Shortest App" });
});

// Encode Route : Route responsible for receiving the url that will be stored.
app.post('/encode', async (req, res) => {
  const short = shortid.generate()
  const body = { id: short, url: req.body.url }
  const results = await db.insertUrls(body)

  res.status(201).json(body);
})

// Decode Route : Route responsible for returning the stored url according to the requested id
app.get('/decode/:id?', async (req, res) => {
  const params = req.params;
  const clientes = await db.selectId(params);
  res.status(201).json(clientes);
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})