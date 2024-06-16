import React from 'react'
import './AddService.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
 

export default function AddService() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      price: "",
      agree: false
    },
    onSubmit: (values) => {
      fetch('http://localhost:5000/services/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: Number(values.id), name: values.name, price: Number(values.price) }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.message === 0) {
            toast.error('Unsuccessful Added');
          }
          else {
            toast.success('Successful Added');
            navigate('/manageService');
          }
        })
        .catch(err => console.log(err));
    },
    validationSchema: Yup.object({
      id: Yup.string().required("Required.").min(1, "Please enter a valid id"),
      name: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
      price: Yup.string().required("Required").min(1, "Please enter a valid price"),
      agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted.")
    }),
  });

  const handleKeyDown = (e) => {
    // Allow only numeric keys, backspace, and delete
    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];

    if (!/\d/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className='addService-component' >
        <div className='container' >

          {/* Heading */}
          <div className='row' >
            <div className='col-3' ><Link className='back-button' to='/manageService' ><img src='assets/images/arrow-left.svg' alt='' /></Link></div>
            <div className='col-9' >
              <h1>Add New Service</h1>
              <div className='heading-motion' ></div>
            </div>
          </div>

          <div className='row ' >
            {/* Gif */}
            <div className='col-4 test' ><img src='assets/images/gif-5.gif' alt='' /></div>

            {/* Form */}
            <div className='col-4' >
              <form onSubmit={formik.handleSubmit} >

                {/* Input ID */}
                <div className='row mb-3' >
                  <label >ID</label>
                  <a
                    data-tooltip-id="id-tooltip"
                    data-tooltip-content={formik.errors.id}
                    data-tooltip-variant="warning" data-tooltip-place="right"
                  >
                    <input onChange={formik.handleChange} onKeyDown={handleKeyDown} type='text' name='id' value={formik.values.id} />
                  </a>
                </div>
                <Tooltip id='id-tooltip' isOpen={isOpen} imperativeModeOnly />

                {/* Input Name */}
                <div className='row mb-3' >
                  <label >Name</label>
                  <a
                    data-tooltip-id="name-tooltip"
                    data-tooltip-content={formik.errors.name}
                    data-tooltip-variant="warning" data-tooltip-place="right"
                  >
                    <input onChange={formik.handleChange} type='text' name='name' value={formik.values.name} />
                  </a>
                </div>
                <Tooltip id='name-tooltip' isOpen={isOpen} imperativeModeOnly />

                {/* Input Price */}
                <div className='row mb-3' >
                  <label >Price</label>
                  <a
                    data-tooltip-id="price-tooltip"
                    data-tooltip-content={formik.errors.price}
                    data-tooltip-variant="warning" data-tooltip-place="right"
                  >
                    <input onChange={formik.handleChange} onKeyDown={handleKeyDown} type='text' name='price' value={formik.values.price} />
                  </a>
                </div>
                <Tooltip id='price-tooltip' isOpen={isOpen} imperativeModeOnly />

                {/* Switch */}
                <div className='row mb-3' >
                  <a
                    data-tooltip-id="agree-tooltip"
                    data-tooltip-content={formik.errors.agree}
                    data-tooltip-variant="warning" data-tooltip-place="right"
                  >
                    <div class="form-check form-switch">
                      <input class="form-check-input" name='agree' type="checkbox" id="switch" value={formik.values.agree} onChange={formik.handleChange} />
                      <label class="form-check-label" for="switch">Check this button to submit</label>
                    </div>
                  </a>
                </div>
                <Tooltip id='agree-tooltip' isOpen={isOpen} imperativeModeOnly />

                {/* Submit Button */}
                <div className='submit-button' >
                  <button type='submit' >SUBMIT</button>
                </div>
              </form>
            </div>

            {/* Gif */}
            <div className='col-4' ><img src='assets/images/gif-4.gif' alt='' /></div>
          </div>

        </div>
      </div>
    </>
  )
}
