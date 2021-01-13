import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from "./actions";

// route here is the nested/child components to show inside the App (check Routes.js)
const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

function loadData ({ dispatch }) {
  console.log('Load Data Fn : App Component');

  return dispatch(fetchCurrentUser());
}

export default {
  component: App,
  loadData
};