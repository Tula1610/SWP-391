import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ManageCombo.css'
import { Modal, Button, NavDropdown, DropdownButton, Dropdown, Row, Col } from 'react-bootstrap';
import toast from 'react-hot-toast';

export default function ManageCombo() {
  const [combos, setCombos] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  // Close modal of delete
  const handleClose = () => {
    setShow(false);
  };

  // Show modal of delete
  const handleShow = (comboId) => {
    setShow(true);
    setDeleteId(comboId);
  };

  // Get all combo from database
  const fetchData = async () => {
    await fetch('http://localhost:5000/combos/read')
      .then(res => res.json())
      .then(json => setCombos(json))
      .catch(err => console.log(err))
  };

  // Delete one combo from database by combo ID
  const deleteCombo = async () => {
    setShow(false);
    await fetch(`http://localhost:5000/combos/delete/${deleteId}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetchData();
        toast.success('Successful deleted')
      })
      .catch(err => console.log(err))
  }

  // Start fetching data
  useEffect(() => {
    let isFetched = true;
    if (isFetched) fetchData();
    return () => {
      isFetched = false;
    }
  }, [])


  return (
    <>
      <div className='manageCombo-component' >
        <div className='container-fluid' >
          <div className='container' >
            <div className='table' >
              <div className='row' >
                <div className='col-10' >
                  <div className='table-heading-left' ><h1>Combo List</h1></div>
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
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {combos.map((combo) => (
                    <tr key={combo.comboId} >
                      <td>{combo.comboId}</td>
                      <td>{combo.name}</td>
                      <td>$ {combo.price}</td>
                      <td>
                        <Dropdown>
                          <Dropdown.Toggle className='dropdown-toggle'  ></Dropdown.Toggle>

                          <Dropdown.Menu className='dropdown-menu' >
                            <Dropdown.Item className='dropdown-item' ><Link className='update-button' to={`/updateCombo?${combo.id}`} >UPDATE</Link></Dropdown.Item>
                            <Dropdown.Item className='dropdown-item' ><a onClick={() => handleShow(combo.id)} >DELETE</a></Dropdown.Item>
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
                  <Button variant='danger' id='delete-button' onClick={() => deleteCombo()}>
                    DELETE
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* Add Button */}
              <div className='add-button' >
                <Link className='add-button-Link' to='/addCombo' >ADD</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}