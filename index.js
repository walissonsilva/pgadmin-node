const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index', {query: false});
})

app.post('/query', (req, res) => {
  let query = req.body.query;
  
  res.render('index', {query: true, results: query})

  console.log(query);
})

app.listen(3000, () => {
    console.log('Servidor rodando...');
});
