const express = require('express');
const path = require('path');
const db = require('../db/db.js');

const app = express();

app.use(express.static(path.join(__dirname, '../public/dist')));

const port = 3000;

app.listen(port, () => {
  console.log(`Server connected at http://localhost:${port}`);
});

db.on('error', console.error.bind(console, 'error'));
db.once('open', () => {
  console.log('Connected to beartnt!');
});