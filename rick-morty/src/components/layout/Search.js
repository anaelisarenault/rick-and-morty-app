import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
  static defaultProps = {
    title: 'Search...',
    icon: 'far fa-search'
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
    <div>
        <i className={this.props.icon} /> {this.props.title}
    </div>
    )
  }
}

export default Search;
