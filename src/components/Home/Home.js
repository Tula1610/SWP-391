import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <div>
          <Link to='/bookingSpa' >Booking Spa</Link>
          <p></p>
          <Link to='/manageStaff' >Manage Staff</Link>
          <p></p>
          <Link to='/manageService' >Manage Service</Link>
          <p></p>
          <Link to='/manageCombo' >Manage Combo</Link>
        </div>
    </>
  )
}
