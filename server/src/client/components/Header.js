import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ authenticated }) => {
  console.log('authenticated ', authenticated);

  const authButton = authenticated ? (
    <a href="/api/logout" >Logout</a> // /api here to make request go through proxy then to API server
  ) : (
    <a href="/api/auth/google" >Login</a>
  )

  return (
    <div>
      <Link to="/">SSR-React</Link>
      <div>
        <Link to="/users" >Users</Link>
        <Link to="/admins" >Admins</Link>
        {authButton}
      </div>
    </div>
  )
};

function mapStateToProps ({ authenticated }) {
  return { authenticated };
}

export default connect(mapStateToProps)(Header);