import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Search = (props) => {
  return (
    <div>
      <i className={props.icon} /> {props.title}
    </div>
  )
}

Search.defaultProps = {
  title: 'Search...',
  icon: 'fas fa-search'
};

Search.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Search;
