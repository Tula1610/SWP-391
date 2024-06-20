import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ManageStaff.css'
import { Modal, Button, Dropdown } from 'react-bootstrap';
import toast from 'react-hot-toast';

export default function ManageStaff() {
  const [staffs, setStaffs] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (staffId) => {
    setShow(true);
    setDeleteId(staffId);
  };

  // Get all staff from backend
  const fetchData = () => {
    fetch('http://localhost:5000/staffs/read')
      .then(res => res.json())
      .then(json => setStaffs(json))
      .catch(err => console.log(err))
  };

  // Delete one staff from database by ID
  const deleteStaff = () => {
    setShow(false);
    fetch(`http://localhost:5000/staffs/delete/${deleteId}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetchData();
        toast.success('Successful deleted')
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData();
  }, [])
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
                      <td>
                        <Dropdown>
                          <Dropdown.Toggle className='dropdown-toggle'  ></Dropdown.Toggle>

                          <Dropdown.Menu className='dropdown-menu' >
                            <Dropdown.Item className='dropdown-item' ><Link className='update-button' to={`/updateStaff?${staff.id}`} >UPDATE</Link></Dropdown.Item>
                            <Dropdown.Item className='dropdown-item' ><a onClick={() => handleShow(staff.id)} >DELETE</a></Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Notification</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant='danger' id='delete-button' onClick={() => deleteStaff()}>
                    DELETE
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* Add Button */}
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