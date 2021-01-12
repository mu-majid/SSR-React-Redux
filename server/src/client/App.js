import react from 'react';
import { renderRoutes } from 'react-router-config';

// route here is the nested/child components to show inside the App (check Routes.js)
const App = ({ route }) => {
  return (
    <div>
      <h1>Header Lives Here</h1>
      <div>{renderRoutes(route.routes)}</div>
    </div>
  );
};

export default {
  component: App
};