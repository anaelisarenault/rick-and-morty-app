import React, { Component } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner /> 
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'list',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridGap: '0.5rem'
};

export default Users
