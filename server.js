const express = require('express');
const db = require('.develop/db');
const path = require('path');

const server = express();
const PORT = 3001;

server.use(express.static('public'));

server.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'develop/index.html'))
);

server.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'develop/notes.html'))
);
