// entry point for client side app
// treat this file as normal react app bootup
import 'babel-polyfill';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'; // React component used to communicate data between store and other `connected` components
import reducers from './reducers';
import { renderRoutes } from "react-router-config";

const clientAxiosInstance = axios.create({
  baseURL: '/api'
});
const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(clientAxiosInstance))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>

    </BrowserRouter>
  </Provider>
  ,
  // this will take over the div rendered and sent by the server initially
  // We do this to mount/register our event handlers, ...
  document.querySelector('#root')
);

