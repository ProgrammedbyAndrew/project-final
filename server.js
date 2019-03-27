'use strict';

const express = require('express'),
app = express(),
router = express.Router(),
PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.listen(PORT, () => {console.log(PORT)});

app.get('/', function(req, res) {
   res.sendfile('./public/index.html');
});