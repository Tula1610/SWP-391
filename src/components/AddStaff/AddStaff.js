import React from 'react'
import './AddStaff.css'
import { useState } from 'react'


export default function AddStaff() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('');
  const [notification, setNotification] = useState();

  const addStaff = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/staffs/create', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: Number(id), name, phoneNumber: Number(phoneNumber), role }),
    })
      .then(res => res.json())
      .then(data => {
        if( data.message === 0 ) setNotification('Unsuccessful Submit');
        else setNotification('Successful Submit');
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <div className='addStaff-component' >
        <div className='container' >

          <h1>Add New Staff</h1>

          <div className='row ' >
            {/* Gif */}
            <div className='col-4 test' ><img src='assets/images/gif-4.gif' alt='' /></div>

            {/* Form */}
            <div className='col-4' >
              <form onSubmit={addStaff} >
                <div className='row' >
                  <label for='id' >ID:</label>
                  <input onChange={(e) => setId(e.target.value)} type='number' value={id} required />
                </div>
                <div className='row' >
                  <label for='name' >Name:</label>
                  <input onChange={(e) => setName(e.target.value)} type='text' value={name} required />
                </div>
                <div className='row' >
                  <label for='phoneNumber' >Phone Number:</label>
                  <input onChange={(e) => setPhoneNumber(e.target.value)} type='number' value={phoneNumber} required />
                </div>
                <div className='row' >
                  <label for='role' >Role:</label>
                  <input onChange={(e) => setRole(e.target.value)} type='text' value={role} required />
                </div>

                {/* Submit Button */}
                <div className='submit-button' >
                  <button type='submit' >SUBMIT</button>
                </div>

                <p className='notification' >{notification}</p>
              </form>
            </div>

            {/* Gif */}
            <div className='col-4' ><img src='assets/images/gif-5.gif' alt='' /></div>
          </div>

        </div>
      </div>
    </>
  )
}
