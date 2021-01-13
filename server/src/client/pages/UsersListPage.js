import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchUsers } from "../actions";

class UsersList extends Component {
  componentDidMount () {
    this.props.fetchUsers();
  }

  renderusers () {
    return this.props.users.map(user => {
      return <li key={user.id} >{user.name}</li>;
    });
  }

  render () {
    return (
      <div>
        <ul>
          <h1>Public resource of users</h1>
          {this.renderusers()}
        </ul>
      </div>
    );
  }
};

function mapStateToProps (state) {
  return { users: state.users };
}

function loadData (store) {
  console.log('Load Data Fn : Users List Component');
  
  return store.dispatch(fetchUsers()); // store is the server side store instance
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData
};