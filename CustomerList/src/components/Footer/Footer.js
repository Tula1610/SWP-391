import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer' >
        <div className='container' >
            <div className='row align-items-center' >
                <div className='col-4' >
                    <p>Contact: 0948561324</p>
                    <p>Address: 143/53 Tan Lap 2, Quan 9, TP HCM</p>
                    <p>Email: petspa@gmail.com</p>
                </div>
                <div className='col-4 text-center' >
                  <p>Pet's Spa Service</p>
                  <img src='assets/images/logo-app.jpg' />
                </div>
                <div className='col-4 text-end' ><img src='assets/images/10.png' /></div>
            </div>
        </div>
      </div>
    )
  }
}
