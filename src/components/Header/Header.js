import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <>
        <div className='header-component' >
          <div className='container-fluid' >
            <div className='container' >
              <div className='row align-items-center' >
                {/*Header-left*/}
                <div className='col-5' >
                  <nav className='navbar navbar-expand-lg bg-body-tertiary' >
                    <div className='container-fluid' >
                      <span className='navbar-brand mb-0 h1' ><img src='assets/images/logo.png' alt='' /></span>
                      <div className='collapse navbar-collapse' id='navbarNav' >
                        <ul className='navbar-nav' >
                          <Link to='/' className='link' >HOME</Link>
                          <Link to='/bookingSpa' className='link' >BOOKING SPA</Link>
                          <Link to='/reviewCombo' className='link' >REVIEW COMBO</Link>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>

                {/*Header-center*/}
                <div className='col-5' ><div className='center-img' ><img src='assets/images/image-1.png' alt='' /></div></div>

                {/*Header-right*/}
                <div className='col-2' >
                  <button type='button' >Login</button>
                  <button type='button' >Sign in</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
