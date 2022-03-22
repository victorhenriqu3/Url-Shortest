const express = require("express");
const app = express();
const port = 3000;
(async () => {
  const db = require("./Services/db");
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
  res.json({ message: "Welcome to URL Shortest App" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})