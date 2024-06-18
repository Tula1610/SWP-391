import React, { useEffect } from "react";
import "./BookingSpa.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingSpa() {
  const [isOpen, setIsOpen] = useState(true);

  const formik = useFormik({
    initialValues: {
      customerName: "",
      phoneNumber: "",
      petName: "",
      petType: "",
      date: new Date(),
      services: [],
      combos: [],
      agree: false,
    },
    onSubmit: (values) => {
      fetch("http://localhost:5000/bookings/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerName: values.customerName,
          phoneNumber: Number(values.phoneNumber),
          petName: values.petName,
          petType: values.petType,
          date: Date(values.date),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === 0) {
            toast.error("Submit Unsuccessfully");
          } else toast.success("Submit Successfully");
        })
        .catch((err) => console.log(err));
    },
    validationSchema: Yup.object({
      customerName: Yup.string().required("Required."),
      phoneNumber: Yup.string()
        .required("Required")
        .min(10, "Please enter full number"),
      petName: Yup.string().required("Required."),
      petType: Yup.string()
        .required("Required")
        .typeError("Please select a pet type."),
      services: Yup.string()
        .required("Required")
        .typeError("Please select a service."),
      combos: Yup.string()
        .required("Required")
        .typeError("Please select a combo."),
      date: Yup.date().required("Required"),
      agree: Yup.boolean().oneOf(
        [true],
        "The terms and conditions must be accepted."
      ),
    }),
  });

  const handleKeyDown = async (e) => {
    // Allow only numeric keys, backspace, and delete
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
    ];

    if (!/\d/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  // Read all service
  const readAllService = async () => {
    let isFetched = true;
    await fetch("http://localhost:5000/services/read")
      .then((res) => res.json())
      .then((json) => {
        if (isFetched) {
          formik.setValues({ services: json });
        }
      })
      .catch((err) => console.log(err));

    return () => {
      isFetched = false;
    };
  };

  // Read all combo
  /* const readAllCombo = async () => {
    let isFetched = true;
    await fetch("http://localhost:5000/combos/read")
      .then((res) => res.json())
      .then((json) => {
        if (isFetched) {
          formik.setValues({ combos: json });
        }
      })
      .catch((err) => console.log(err));

    return () => {
      isFetched = false;
    };
  }; */

  useEffect(() => {
    readAllService();
    //readAllCombo();
  }, []);

  return (
    <>
      <div className="bookingSpa-component">
        <div className="container">
          {/* Heading */}
          <div className="row">
            <div className="col-3">
              <Link className="back-button" to="/">
                <img src="assets/images/arrow-left.svg" alt="" />
              </Link>
            </div>
            <div className="col-9">
              <h1>Booking Spa</h1>
              <div className="heading-motion"></div>
            </div>
          </div>

          <div className="row ">
            {/* Gif */}
            <div className="col-4 test">
              <img src="assets/images/gif-5.gif" alt="" />
            </div>

            {/* Form */}
            <div className="col-4">
              <form onSubmit={formik.handleSubmit}>
                {/* Enter Customer Name */}
                <div className="row mb-3">
                  <label>Customer Name</label>
                  <a
                    data-tooltip-id="customerName-tooltip"
                    data-tooltip-content={formik.errors.customerName}
                    data-tooltip-variant="warning"
                    data-tooltip-place="right"
                  >
                    <input
                      onChange={formik.handleChange}
                      type="text"
                      name="customerName"
                      value={formik.values.customerName}
                    />
                  </a>
                </div>
                <Tooltip
                  id="customerName-tooltip"
                  isOpen={isOpen}
                  imperativeModeOnly
                />

                {/* Enter Phone Number */}
                <div className="row mb-3">
                  <label>Phone Number</label>
                  <a
                    data-tooltip-id="phoneNumber-tooltip"
                    data-tooltip-content={formik.errors.phoneNumber}
                    data-tooltip-variant="warning"
                    data-tooltip-place="right"
                  >
                    <input
                      onChange={formik.handleChange}
                      onKeyDown={handleKeyDown}
                      type="text"
                      maxLength={10}
                      name="phoneNumber"
                      value={formik.values.phoneNumber}
                    />
                  </a>
                </div>
                <Tooltip
                  id="phoneNumber-tooltip"
                  isOpen={isOpen}
                  imperativeModeOnly
                />

                {/* Enter Pet Name */}
                <div className="row mb-3">
                  <label>Pet Name</label>
                  <a
                    data-tooltip-id="petName-tooltip"
                    data-tooltip-content={formik.errors.petName}
                    data-tooltip-variant="warning"
                    data-tooltip-place="right"
                  >
                    <input
                      onChange={formik.handleChange}
                      type="text"
                      name="petName"
                      value={formik.values.petName}
                    />
                  </a>
                </div>
                <Tooltip
                  id="petName-tooltip"
                  isOpen={isOpen}
                  imperativeModeOnly
                />

                {/* Choose Pet Type */}
                <div className="row mb-3">
                  <label>Pet Type</label>
                  <a
                    data-tooltip-id="petType-tooltip"
                    data-tooltip-content={formik.errors.petType}
                    data-tooltip-variant="warning"
                    data-tooltip-place="right"
                  >
                    <select
                      class="form-select"
                      name="petType"
                      value={formik.values.petType}
                      onChange={formik.handleChange}
                    >
                      <option value="Cat">Cat</option>
                      <option value="Dog">Dog</option>
                    </select>
                  </a>
                </div>
                <Tooltip
                  id="petType-tooltip"
                  isOpen={isOpen}
                  imperativeModeOnly
                />

                {/* Enter Date */}
                <div className="row mb-3">
                  <label>Date</label>
                  <a
                    data-tooltip-id="date-tooltip"
                    data-tooltip-content={formik.errors.date}
                    data-tooltip-variant="warning"
                    data-tooltip-place="right"
                  >
                    <DatePicker
                      className="date-input"
                      selected={formik.values.date}
                      onChange={(result) => {
                        formik.setValues({ date: result });
                      }}
                      name="date"
                      isClearable
                    />
                  </a>
                </div>
                <Tooltip id="date-tooltip" isOpen={isOpen} imperativeModeOnly />

                {/* Choose Service */}
                <div className="row mb-3">
                  <label>Choose Service</label>
                  <a
                    data-tooltip-id="service-tooltip"
                    data-tooltip-content="Please select a service"
                    data-tooltip-variant="warning"
                    data-tooltip-place="right"
                  >
                    <select class="form-select">
                      {formik.values.services.map((option, index) => (
                        <option key={index} value={option.name}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </a>
                </div>
                <Tooltip
                  id="service-tooltip"
                  isOpen={isOpen}
                  imperativeModeOnly
                />

               {/*  Choose Combo
                <div className="row mb-3">
                  <label>Choose Combo</label>
                  <a
                    data-tooltip-id="combo-tooltip"
                    data-tooltip-content="Please select a Combo"
                    data-tooltip-variant="warning"
                    data-tooltip-place="right"
                  >
                    <select class="form-select">
                      {formik.values.combos.map((option, index) => (
                        <option key={index} value={option.name}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </a>
                </div>
                <Tooltip
                  id="combo-tooltip"
                  isOpen={isOpen}
                  imperativeModeOnly
                /> */}

                {/* Switch */}
                <div className="row mb-3">
                  <a
                    data-tooltip-id="agree-tooltip"
                    data-tooltip-content={formik.errors.agree}
                    data-tooltip-variant="warning"
                    data-tooltip-place="right"
                  >
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        name="agree"
                        type="checkbox"
                        id="switch"
                        value={formik.values.agree}
                        onChange={formik.handleChange}
                      />
                      <label class="form-check-label" for="switch">
                        Check this button to submit
                      </label>
                    </div>
                  </a>
                </div>
                <Tooltip
                  id="agree-tooltip"
                  isOpen={isOpen}
                  imperativeModeOnly
                />

                {/* Submit Button */}
                <div className="submit-button">
                  <button type="submit">SUBMIT</button>
                </div>
              </form>
            </div>

            {/* Gif */}
            <div className="col-4">
              <img src="assets/images/gif-4.gif" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
