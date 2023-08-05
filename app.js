const express = require('express');

const path = require('path');

const app = express();

app.listen(3000, () => console.log('Sirve'));

app.get('/', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/home.html');
    res.sendFile(htmlPath);
})

