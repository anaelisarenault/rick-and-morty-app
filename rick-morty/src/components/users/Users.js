import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
  state = {
    users: [
      {},
      {},
      {}
    ]
  }

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'list',
  gridTemplateColumns: "repeat(1, 1fr)",
  gridGap: '0.5rem'
}

export default Users
