import React from 'react'
import PropTypes from 'prop-types'

const UserItem  = ({user: { login, image, html }}) => {
  
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

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem
