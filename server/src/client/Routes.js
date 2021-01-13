import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundpage from './pages/NotFoundpage';
import AdminsListPage from './pages/AdminsListPage';


export default [
  {
    ...App, // no path for App, so it will always ebe shown on screen
    routes: [
      {
        ...HomePage,
        path:'/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        path: '',
        ...NotFoundpage
      }
    ]
  }
];