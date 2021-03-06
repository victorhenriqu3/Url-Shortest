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

async function insertUrls(body) {
  const conn = await connect();
  const sql = 'INSERT INTO url_shortest(id,url_original) VALUES(?,?)';
  const params = [body.id, body.url]

  return await conn.query(sql, params)
}

async function selectId(paramsUrl) {
  const conn = await connect();
  const sql = "SELECT * FROM url_shortest WHERE id=?";
  const params = [paramsUrl.id]

  const [rows] = await conn.query(sql, params)

  return rows
}

module.exports = { selectId, insertUrls, selectUrls, connect }