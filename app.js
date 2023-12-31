const express = require('express');

const app = express();

const path = require('path');

app.use(express.static('public'));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log('Sirve'));

app.get('/', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/home.html');
    res.sendFile(htmlPath);
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

