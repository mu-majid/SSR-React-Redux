// entry point for client side app
// treat this file as normal react app bootup

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

ReactDOM.hydrate(
  <Home />,
  // this will take over the div rendered and sent by the server initially
  // We do this to mount/register our event handlers, ...
  document.querySelector('#root') 
);

