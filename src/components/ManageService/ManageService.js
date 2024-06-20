import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ManageService.css";
import {
  Modal,
  Button,
  NavDropdown,
  DropdownButton,
  Dropdown,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import toast from "react-hot-toast";

export default function ManageService() {
  const [services, setServices] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const [serviceId, setServiceId] = useState();

  // Close modal
  const handleClose = () => {
    setShowDelete(false);
    setShowDetail(false);
  };

  // Show modal
  const handleShow = (serviceId, nameButton) => {
    if (nameButton === "delete") {
      setDeleteId(serviceId);
      setShowDelete(true);
    } else if (nameButton === "detail") {
      setShowDetail(true);
    }
  };

  // Get all service from backend
  const fetchData = async () => {
    await fetch("http://localhost:5000/services/read")
      .then((res) => res.json())
      .then((json) => setServices(json))
      .catch((err) => console.log(err));
  };

  // Delete one service from database by using service ID
  const deleteService = async () => {
    setShowDelete(false);
    await fetch(`http://localhost:5000/services/delete/${deleteId}`, {
      method: "DELETE",
    })
      .then(() => {
        fetchData();
        toast.success("Successful deleted");
      })
      .catch((err) => console.log(err));
  };

  // Start fetching data
  useEffect(() => {
    let isFetched = true;
    if (isFetched) fetchData();
    return () => {
      isFetched = false;
    };
  }, []);

  return (
    <>
      <div className="manageService-component">
        <div className="container-fluid">
          <div className="container">
            <div className="table">
              <div className="row">
                <div className="col-10">
                  <div className="table-heading-left">
                    <h1>Service List</h1>
                  </div>
                </div>
                <div className="col-2">
                  <img
                    className="table-heading-right"
                    src="assets/images/gif-1.gif"
                    alt=""
                  />
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
                  {services.map((service) => (
                    <tr key={service.id}>
                      <td>{service.id}</td>
                      <td>{service.name}</td>
                      <td>$ {service.price}</td>
                      <td>
                        <Dropdown>
                          <Dropdown.Toggle className="dropdown-toggle"></Dropdown.Toggle>

                          <Dropdown.Menu className="dropdown-menu">
                            <Dropdown.Item className="dropdown-item">
                              <a
                                onClick={() =>
                                  handleShow(service.id, "detail")
                                }
                              >
                                DETAIL
                              </a>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item">
                              <Link
                                className="update-button"
                                to={`/updateService?${service.id}`}
                              >
                                UPDATE
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item">
                              <a
                                onClick={() => handleShow(service.id, "delete")}
                              >
                                DELETE
                              </a>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Modal show={showDelete} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Notification</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="danger"
                    id="delete-button"
                    onClick={() => deleteService()}
                  >
                    DELETE
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* Add Button */}
              <div className="add-button">
                <Link className="add-button-Link" to="/addService">
                  ADD
                </Link>
              </div>
            </div>

            {/* Detail Box */}
            <Modal show={showDetail} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Service Detail</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Table striped bordered hover size="sm" responsive>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Service Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </Table>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
