// Root file
const express = require('express');
const app = express();

const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;

app.get('/', (req, res) => {

  return res.send(renderToString(<Home />));
});

app.listen(3000, () => {
  console.log('Rendering Server Running on Port 3000!');
})
