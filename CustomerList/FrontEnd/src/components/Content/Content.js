import React, { Component } from 'react'
import './Content.css'

export default class Content extends Component {
  render() {
    return (
      <>
        <div className='main' >
          <div className='main-sidebar' >
            <div className='main-sidebar-row' >
              <input type='text' className='form-control' id='customer-name' placeholder='Phone Number' pattern='\d{10}' title='Please enter a 10-digit phone number' required ></input>
            </div>

            <div className = 'new'>
              <div className='add-new' >
                <button className='btn btn-success' type='submit' >Add New Customer</button>
              </div>
            </div>
          </div>

          <div className='main-content' >
            
          <h2>Customer List</h2>

          <div className = 'main-row'>
            <div>
              <div className='main-content-row-box' >
                <img src='assets/images/th.jpg' alt='' />
                <h3>CUSTOMER NAME</h3>
                <h3>PHONE NUMBER</h3>
                <button className='btn btn-success' type='submit' >Detail</button>
              </div>

              <div className='main-content-row-box' >
                <img src='assets/images/avatar.jpg' alt='' />
                <h3>CUSTOMER NAME</h3>
                <h3>PHONE NUMBER</h3>
                <button className='btn btn-success' type='submit' >Detail</button>
              </div>

              <div className='main-content-row-box' >
                <img src='assets/images/th.jpg' alt='' />
                <h3>CUSTOMER NAME</h3>
                <h3>PHONE NUMBER</h3>
                <button className='btn btn-success' type='submit' >Detail</button>
              </div>

              <div className='main-content-row-box' >
                <img src='assets/images/avatar.jpg' alt='' />
                <h3>CUSTOMER NAME</h3>
                <h3>PHONE NUMBER</h3>
                <button className='btn btn-success' type='submit' >Detail</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
