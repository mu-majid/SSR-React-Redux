import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchUsers } from "../actions";

class UsersList extends Component {
  componentDidMount () {

  }

  renderusers () {
    return this.props.users.map(u => {
      return <li key={user.id} >{user.name}</li>;
    })
  }

  render () {
    return (
      <div>
        <ul>
          {this.renderusers}
        </ul>
      </div>
    )
  }
};

function mapStateToProps (state) {
  return { users: state.users };
}

export default connect(mapStateToProps, { fetchUsers })(UsersList);