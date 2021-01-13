import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchAdmins } from "../actions";
import requireAuth from '../components/HOCs/require-auth';

class AdminsList extends Component {
  componentDidMount () {
    this.props.fetchAdmins();
  }

  renderAdmins () {
    return this.props.admins.map(admin => {
      return <li key={admin.id} >{admin.name}</li>;
    });
  }

  render () {
    return (
      <div>
        <ul>
          <h1>Protected resource of admins</h1>
          {this.renderAdmins()}
        </ul>
      </div>
    );
  }
};

function mapStateToProps (state) {
  return { admins: state.admins };
}

function loadData (store) {
  console.log('Load Data Fn : Admins List Component');
  
  return store.dispatch(fetchAdmins()); // store is the server side store instance
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsList)),
  loadData
};