
const Customer = require('../models/CustomerModel');

// CREATE
const createCustomer = (req, res) => {
Customer.findOne({ PhoneNumber: req.body.PhoneNumber })
        .then(result => {
            if (result) res.json({ message: 0 });
            else {
                const newCustomer = new Customer({
                    name : req.body.name,
                    FullName: req.body.FullName,
                    Gender: req.body.Gender,
                    Address: req.body.Address,
                    Birthday : req.body.Birthday,
                    PhoneNumber : req.body.PhoneNumber,
                    Email : req.body.Email
                });

                newCustomer.save()
                    .then(result => res.json(result))
                    .catch(err => console.log(err));
            }
        })
}

// READ
const readAllCustomer = (req, res) => {
 Customer.find().sort({ PhoneNumber: 1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
}

const readOneCustomer = (req, res) => {
    const PhoneNumber = req.params.PhoneNumber;

 Customer.findOne({ PhoneNumber: PhoneNumber })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
}


// DELETE
const deleteOneCustomer = (req, res) => {
    const PhoneNumber = req.params.PhoneNumber;

 Customer.deleteOne({ PhoneNumber: PhoneNumber })
        .then((result) => {
            res.redirect('/customers');
        })
        .catch(err => console.log(err));
}

// UPDATE
const updateOneCustomer = (req, res) => {
 Customer.findOne({ PhoneNumber: req.body.PhoneNumber })
        .then(() => {
            if (result && result.PhoneNumber !== req.body.PhoneNumber) res.json({ message: 0 });
            else {
             Customer.deleteOne({ PhoneNumber: req.body.PhoneNumber })
                    .then(result => res.send(result))
                    .catch(err => console.log(err));

                const newCustomer = new Customer({
                    FullName: req.body.FullName,
                    Gender: req.body.Gender,
                    Address: req.body.Address,
                    Birthday : req.body.Birthday,
                    PhoneNumber : req.body.PhoneNumber,
                    Email : req.body.Email
                });

                newCustomer.save()
                    .then(result => res.json(result))
                    .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));
}


module.exports = {
    readAllCustomer,
    readOneCustomer,
    deleteOneCustomer,
    createCustomer,
    updateOneCustomer
}
