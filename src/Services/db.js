const mysql = require("mysql2/promise");
const config = require('./config.json')

async function connect() {
  const connection = await mysql.createConnection(config.db);
  console.log("Conectou no MySQL!");
  return connection;
}

async function selectUrls() {
  const conn = await connect();
  const [rows] = await conn.query('SELECT * FROM url_shortest');
  return rows;
}

module.exports = { selectUrls, connect }