import React, { Component } from 'react'

class UserItem extends Component {
  render() {
    const { login, avatar, url} = this.props.user;
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
}

export default UserItem
