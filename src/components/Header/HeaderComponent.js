import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './styles.scss'

class HeaderComponent extends Component {
  render () {
    return (
      <div className='header'>
        <div className='logo'> <span style={{color: '#ed145b'}}>/// &nbsp;</span>JavaScript</div>
        <div className='nav'>
          <NavLink activeClassName='active' className='link' to="/home">Home</NavLink>
          <NavLink activeClassName='active' className='link' to="/about">About</NavLink>
        </div>
      </div>
    )
  }
}

export default HeaderComponent
