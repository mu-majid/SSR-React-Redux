import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ authenticated }) => {
  console.log('authenticated ', authenticated)

  return (
    <div>
      <Link to="/">SSR-React</Link>
    </div>
  )
};

function mapStateToProps ({ authenticated }) {
  return { authenticated };
}

export default connect(mapStateToProps)(Header);