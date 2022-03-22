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
app.post('/encode', (req, res) => {
  const short = shortid.generate();
  res.status(201).json({ id: short, url: req.body.url });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})