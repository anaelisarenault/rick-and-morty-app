import React from 'react'

const UserItem  = props => {
  const { login, avatar, url} = props.user;
  return (
    <div className='usercontainer'> 
      <img 
        src={this.state.image}
        className= 'round-img'
      />
      <h1> {this.state.name}</h1>
      <div> 
        <i class="fas fa-chevron-down"></i> 
      </div>
    </div>
  )
}

export default UserItem
