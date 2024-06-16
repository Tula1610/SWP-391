const Booking = require("../models/bookingSchema");

const indexBooking = async (req, res) => {
  res.send("<h1>This is booking page</h1>");
};

// CREATE
const createBooking = async (req, res) => {
  const newBooking = new Booking({
    customerName: req.body.customerName,
    phoneNumber: req.body.phoneNumber,
    petName: req.body.petName,
    petType: req.body.petType,
    date: req.body.date,
  });

  await newBooking
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  indexBooking,
  createBooking
};