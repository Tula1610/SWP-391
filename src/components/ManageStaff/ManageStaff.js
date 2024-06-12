import React, { useEffect, useState } from 'react'
import { Link  } from 'react-router-dom'
import './ManageStaff.css'

export default function ManageStaff() {
  const [staffs, setStaffs] = useState([]);

  
  return (
    <>
      <div className='manageStaff-component' >
        <div className='container-fluid' >
          <div className='container' >
            <div className='table' >
              <div className='row' >
                <div className='col-10' >
                  <div className='table-heading-left' ><h1>Staffs Schedule </h1></div>
                </div>
                <div className='col-2' >
                  <img className='table-heading-right' src='assets/images/gif-1.gif' alt='' />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {staffs.map((staff) => (
                    <tr key={staff.id} >
                      <td>{staff.id}</td>
                      <td>{staff.name}</td>
                      <td>{staff.phoneNumber}</td>
                      <td>{staff.role}</td>
                      <td><Link className='update-button' to={`/update/${encodeURIComponent(JSON.stringify(staff))}`} >UPDATE</Link> </td>
                      <td><button>DELETE</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className='add-button' >
                <Link className='add-button-Link' to='/addStaff' >ADD</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


