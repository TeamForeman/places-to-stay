const express = require('express');
const path = require('path');
const db = require('../db/db.js');

const app = express();

app.use(express.static(path.join(__dirname, '../public/dist')));

const port = 3004;

app.get('/1', (req, res) => {
  // console.log(req);
  res.data = 'hello';
  res.location('/1');
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server connected at http://localhost:${port}`);
});

db.con.on('error', console.error.bind(console, 'error'));
db.con.once('open', () => {
  console.log('Connected to beartnt!');
});