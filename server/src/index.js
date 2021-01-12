// Root file for server bundle
import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config'
import Renderer from './helpers/renderer';
import createStore from './helpers/redux-server-store';
import Routes from './client/Routes';

const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', { // only specific to the API server implemented
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000'; // for google-oauth process destination param
    return opts;
  }
}));

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore(req); // server side store

  // get components that needs to be rendered for the requested page (req.path)
  console.log('These Components needs rendering : \n', matchRoutes(Routes, req.path))
  const componentsDataPromises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(componentsDataPromises)
    .then(() => {
      const staticRouterContext = {};
      const content = Renderer(req, store, staticRouterContext);
      if (context.notFound) {
        return res.status(404);
      }
      return res.send(content);
    });
  
});

app.listen(3000, () => {
  console.log('Rendering Server Running on Port 3000!');
});
