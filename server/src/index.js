// Root file

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();
app.get('/', (req, res) => {

  return res.send(renderToString(<Home />));
});

app.listen(3000, () => {
  console.log('Rendering Server Running on Port 3000!');
})
