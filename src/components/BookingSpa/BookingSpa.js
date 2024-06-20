import React, { useEffect } from "react";
import "./BookingSpa.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

export default function BookingSpa() {
  const [isOpen, setIsOpen] = useState(true);
  const [listService, setListService] = useState([]);
  const [listCombo, setListCombo] = useState([]);
  const [errService, setErrService] = useState();

  const formik = useFormik({
    initialValues: {
      customerName: "",
      phoneNumber: "",
      petName: "",
      petType: "",
      date: new Date(),
      services: [],
      combo: "",
      agree: false,
    },
    onSubmit: (values, onSubmitProps) => {
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
          date: values.date,
          services: values.services,
          combo: values.combo,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === 0) {
            toast.error("Unsuccessfully");
          } else {
            toast.success("Successfully");
            onSubmitProps.isSubmitting(false);
          }
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
        .matches(/^[a-zA-Z\s]*$/, "Required.")
        .required(),
      combo: Yup.string()
        .matches(/^[a-zA-Z\s]*$/, "Required.")
        .required(),
      date: Yup.date().required("Required"),
      agree: Yup.boolean().oneOf(
        [true],
        "The terms and conditions must be accepted."
      ),
    }),
  });

  // Allow only numeric keys, backspace, delete and number
  const handleKeyDownNumber = async (e) => {
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

  // Allow only numeric keys, backspace, delete and string
  const handleKeyDownString = async (e) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
    ];

    if (!/^[a-zA-Z\s]*$/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  // Handle selected services
  const handleChangeServices = async (e) => {
    if (e.target.checked === true) {
      formik.values.services.push(e.target.value);
    } else {
      if (e.target.value) {
        formik.values.services.splice(
          formik.values.services.indexOf(e.target.value),
          1
        );
      }
    }
    formik.values.services.sort();
    if (formik.values.services.length === 0)
      setErrService("Please choose at least one service");
    else setErrService("");
  };

  // Read all service
  const readAllService = async () => {
    let isFetched = true;
    await fetch("http://localhost:5000/services/read", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        if (isFetched) {
          setListService(json);
        }
      })
      .catch((err) => console.log(err));

    return () => {
      isFetched = false;
    };
  };

  // Read all combo
  const readAllCombo = async () => {
    let isFetched = true;
    await fetch("http://localhost:5000/combos/read", {
      method: "Get",
    })
      .then((res) => res.json())
      .then((json) => {
        if (isFetched) {
          setListCombo(json);
        }
      })
      .catch((err) => console.log(err));

    return () => {
      isFetched = false;
    };
  };

  useEffect(() => {
    readAllService();
    readAllCombo();
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
                      onKeyDown={handleKeyDownString}
                      type="text"
                      name="customerName"
                      value={formik.values.customerName}
                      placeholder="Name..."
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
                      onKeyDown={handleKeyDownNumber}
                      type="text"
                      maxLength={10}
                      name="phoneNumber"
                      value={formik.values.phoneNumber}
                      placeholder="0123-456-789"
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
                      placeholder="Name..."
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
                      <option selected value={1}>
                        Please choose a pet type
                      </option>
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
                      minDate={new Date()}
                      onChange={(result) => {
                        formik.setFieldValue("date", result);
                      }}
                      name="date"
                      showTimeInput
                      dateFormat="yyyy/MM/dd h:mm aa"
                      isClearable
                    />
                  </a>
                </div>
                <Tooltip id="date-tooltip" isOpen={isOpen} imperativeModeOnly />

                {/* Choose Service */}
                <div className="row mb-3">
                  <label>Service</label>
                  <a
                    data-tooltip-id="services-tooltip"
                    data-tooltip-content={errService}
                    data-tooltip-variant="warning"
                    data-tooltip-place="right"
                  >
                    {listService.map((service) => (
                      <div class="form-check" key={service.id}>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          onChange={(e) => handleChangeServices(e)}
                          value={service.name}
                        />
                        <div className="row">
                          <div className="col">
                            <label class="form-check-label">
                              {service.name}
                            </label>
                          </div>
                          <div className="col">
                            <label class="form-check-label">
                              $ {service.price}
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </a>
                </div>
                <Tooltip
                  id="services-tooltip"
                  isOpen={isOpen}
                  imperativeModeOnly
                />

                {/* Choose Combo */}
                <div className="row mb-3">
                  <label>Combo</label>
                  <a
                    data-tooltip-id="combo-tooltip"
                    data-tooltip-content={formik.errors.combo}
                    data-tooltip-variant="warning"
                    data-tooltip-place="right"
                  >
                    <select
                      class="form-select"
                      name="combo"
                      value={formik.values.combo}
                      onChange={formik.handleChange}
                    >
                      <option selected value={1}>
                        Please choose a combo
                      </option>
                      {listCombo.map((combo) => (
                        <option key={combo.id} value={combo.name}>
                          {combo.name}
                        </option>
                      ))}
                    </select>
                  </a>
                </div>
                <Tooltip
                  id="combo-tooltip"
                  isOpen={isOpen}
                  imperativeModeOnly
                />

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
                <button
                  className="submit-button"
                  type="submit"
                  disabled={
                    !(formik.dirty && formik.isValid) || formik.isSubmitting
                  }
                >
                  SUBMIT
                </button>
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
