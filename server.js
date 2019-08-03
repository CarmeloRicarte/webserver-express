const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

// Middleware. Le indicamos que es una página estática y el directorio donde se encuentra
app.use(express.static(__dirname + '/public'));

// Express hbs
hbs.registerPartials(__dirname + '/views/parciales'); // aquí están los parciales
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

  // esto renderiza home.hbs
  res.render('home', {
    nombre: 'carmelo',
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

/* app.get('/data', (req, res) => {
  res.send('Hola Data');
}); */

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});