// Root file for server bundle

import express from 'express';
import Renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {

  return res.send(Renderer(req));
});

app.listen(3000, () => {
  console.log('Rendering Server Running on Port 3000!');
})
