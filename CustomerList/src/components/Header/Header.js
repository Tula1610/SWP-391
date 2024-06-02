import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <>
        <div className='header' >
          <div className='left' >
            <img src='assets/images/logo-app.jpg' alt='Logo of app' />
            <a href='#' >Home</a>
            <a href='#' >REVIEW COMBO</a>
          </div>
          <div className='center' >
            <img src='assets/images/header-image.png' alt='image of header' />
          </div>
          
        </div>
      </>
    )
  }
}
