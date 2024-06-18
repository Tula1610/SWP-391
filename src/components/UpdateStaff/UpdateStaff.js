import React, { useEffect } from 'react'
import './UpdateStaff.css'
import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'


export default function UpdateStaff() {
  const [oldId, setOldId] = useState("");
  const location = useLocation();
  // eslint-disable-next-line
  const [isOpen, setIsOpen] = useState(true);
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      phoneNumber: "",
      role: "",
      agree: false
    },
    onSubmit: (values) => {
      let isFetched = true;
      fetch('http://localhost:5000/staffs/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ oldId: Number(oldId), id: Number(values.id), name: values.name, phoneNumber: Number(values.phoneNumber), role: values.role }),
      })
        .then(res => res.json())
        .then(data => {
          if (isFetched) {
            if (data.message === 0) toast.error('Unsuccessful Updated');
            else {
              toast.success('Successful Updated');
              setOldId(data.id);
            }
          }
        })
        .catch(err => console.log(err));

      return () => {
        isFetched = false;
      }
    },
    validationSchema: Yup.object({
      id: Yup.string().required("Required.").min(1, "Please enter a valid id"),
      name: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
      phoneNumber: Yup.string().required("Required").min(10, "Please enter full number"),
      role: Yup.string().required("Required").typeError("Please select a role."),
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

  useEffect(() => {
    let isFetched = true;
    const passedId = location.search.substring(1);

    if ( oldId === "") {
      setOldId(passedId);
      formik.setValues({ id: passedId });
    }
    else {
      setOldId(formik.values.id);
    }
    async function startFetching() {
      await fetch(`http://localhost:5000/staffs/read/${oldId}`)
        .then(res => res.json())
        .then(json => {
          if (isFetched) {
            formik.setValues({
              id: json.id,
              name: json.name,
              phoneNumber: json.phoneNumber,
              role: json.role,
              agree: false
            })
          }
        })
        .catch(err => console.log(err));
    }
    startFetching();
    return () => {
      isFetched = false
    }
  }, [oldId])

  return (
    <>
      <div className='updateStaff-component' >
        <div className='container' >

          {/* Heading */}
          <div className='row' >
            <div className='col-3' ><Link className='back-button' to='/manageStaff' ><img src='assets/images/arrow-left.svg' alt='' /></Link></div>
            <div className='col-9' ><h1>Update Staff</h1></div>
          </div>

          <div className='row ' >
            {/* Gif */}
            <div className='col-4' ><img src='assets/images/gif-1.gif' alt='' /></div>

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


                {/* Input Phone Number */}
                <div className='row mb-3' >
                  <label >Phone Number</label>
                  <a
                    data-tooltip-id="phoneNumber-tooltip"
                    data-tooltip-content={formik.errors.phoneNumber}
                    data-tooltip-variant="warning" data-tooltip-place="right"
                  >
                    <input onChange={formik.handleChange} onKeyDown={handleKeyDown} type='text' maxLength={10} name='phoneNumber' value={formik.values.phoneNumber} />
                  </a>
                </div>
                <Tooltip id='phoneNumber-tooltip' isOpen={isOpen} imperativeModeOnly />


                {/* Choose Role */}
                <div className='row mb-3' >
                  <label>Choose role</label>
                  <a
                    data-tooltip-id="role-tooltip"
                    data-tooltip-content={formik.errors.role}
                    data-tooltip-variant="warning" data-tooltip-place="right"
                  >
                    <select class="form-select" name='role' value={formik.values.role} onChange={formik.handleChange} >
                      <option value="Admin">Admin</option>
                      <option value="Staff">Staff</option>
                    </select>
                  </a>
                </div>
                <Tooltip id='role-tooltip' isOpen={isOpen} imperativeModeOnly />

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
            <div className='col-4' ><img src='assets/images/gif-5.gif' alt='' /></div>
          </div>

        </div>
      </div>
    </>
  )
}
