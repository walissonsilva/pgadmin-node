const express = require('express');
const ejs = require('ejs');
const { Client } = require('pg');

const app = express();

app.set('view engine', 'ejs');
app.use('/', express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {query: false});
})

app.listen(3000, () => {
    console.log('Servidor rodando...');
});