import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchAdmins } from "../actions";

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
          <div>Protected resource of admins</div>
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
  
  return store.dispatch(fetchAdmins()); // store is the server side store instance
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(AdminsList),
  loadData
};