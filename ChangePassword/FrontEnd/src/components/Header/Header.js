import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <>
        <div className='container-fluid' >
          <div className='container' >
                  <div className='row align-items-center' >
                      {/*Header-left*/}
                      <div className='col-5' >
                          <nav className='navbar navbar-expand-lg bg-body-tertiary' >
                              <div className='container-fluid' >
                                  <span className='navbar-brand mb-0 h1' ><img src='assets/images/header-left-logo.jpg' /></span>
                                  <div className='collapse navbar-collapse' id='navbarNav' >
                                      <ul className='navbar-nav' >
                                          <li className='nav-item' ><a className='nav-link active' aria-current='page'href='#' >HOME</a></li>
                                          <li className='nav-item' ><a className='nav-link' href='#' >BOOKING SPA</a></li>
                                          <li className='nav-item' ><a className='nav-link' href='#' >REVIEW COMBO</a></li>
                                      </ul>
                                  </div>
                              </div>
                          </nav>
                      </div>

                      {/*Header-center*/}
                      <div className='col-5' ><div className='center-img' ><img src='assets/images/header-image.png' /></div></div>

                    </div>
                </div>
            </div>
      </>
    )
  }
}
