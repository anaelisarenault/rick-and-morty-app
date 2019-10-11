import React from 'react'
import PropTypes from 'prop-types'

const UserItem  = ({user: { login, image, html, name}}) => {
  
  return (
    <div className='usercontainer'> 
      <img 
        src={image}
        className= 'round-img'
      />
      <h1>{name}</h1>
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
