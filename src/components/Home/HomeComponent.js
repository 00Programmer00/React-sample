import React, { Component } from 'react'
import HeaderComponent from '../Header/HeaderComponent'
import './styles.scss'

class HomeComponent extends Component {
  render () {
    return (
      <div className='home-wrapper'>
        <div className='top'>
          <HeaderComponent />
        </div>
        <div className='pink-line' />
      </div>
    )
  }
}

export default HomeComponent
