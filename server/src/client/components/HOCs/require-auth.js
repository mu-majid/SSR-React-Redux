import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (WrappedComponent) => {
  class RequireAuth extends Component {

    render () {
      switch (this.props.authenticated) {
        case false:
          
          return <Redirect to="/" />;

        case null:

          return <div>Loading ... </div>;
      
        default:
          
          return <WrappedComponent {...this.props} />;
      }
    }
  }

  function mapStateToProps ({ authenticated }) {
    return { authenticated };
  }

  return connect(mapStateToProps)(RequireAuth);
}
