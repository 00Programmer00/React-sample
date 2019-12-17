import React, { Component } from 'react'
import HeaderComponent from '../Header/HeaderComponent'
import './styles.scss'

class HomeComponent extends Component {
  render () {
    return (
      <div className='home-wrapper'>
        <div className='top'>
          <div className='content'>
            <div className='title'>
              JavaScript The Best Language
            </div>
            <hr className='underscore' />
            <p className='content-text'>
              JavaScript often abbreviated as JS, is a high-level, just-in-time compiled, object-oriented programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
            </p>
            <button className='show-more-button'>
              Show More
            </button>
          </div>
        </div>
        <div className='pink-line' />
      </div>
    )
  }
}

export default HomeComponent
