import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => { // default to {} because it does not exist on BrowserRouter
staticContext.notFound = true;
  return <h1>Ops, page Not Found</h1>
};

export default {
  component: NotFoundPage
};