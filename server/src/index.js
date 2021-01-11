// Root file for server bundle
import 'babel-polyfill';
import express from 'express';
import Renderer from './helpers/renderer';
import createStore from './helpers/redux-server-store';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();

  // init and load data into store

  return res.send(Renderer(req, store));
});

app.listen(3000, () => {
  console.log('Rendering Server Running on Port 3000!');
});
