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
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo" >SSR-React</Link>
        <ul className="right">
          <li><Link to="/users" >Users</Link></li>
          <li><Link to="/admins" >Admins</Link></li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>

  )
};

function mapStateToProps({ authenticated }) {
  return { authenticated };
}

export default connect(mapStateToProps)(Header);