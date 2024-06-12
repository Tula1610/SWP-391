const Staff = require('../models/staffSchema');

const indexStaff = (req, res) => {
    res.send('<h1>This is staff page</h1>');;
}

// CREATE
const createStaff = (req, res) => {
    Staff.findOne({ id: req.body.id })
        .then(result => {
            if (result) res.json({ message: 0 });
            else {
                const newStaff = new Staff({
                    id: req.body.id,
                    name: req.body.name,
                    phoneNumber: req.body.phoneNumber,
                    role: req.body.role
                });

                newStaff.save()
                    .then(result => res.json(result))
                    .catch(err => console.log(err));
            }
        })
}

// READ
const readAllStaff = (req, res) => {
    Staff.find().sort({ id: 1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
}

// DELETE
const deleteOneStaff = (req, res) => {
    const id = req.params.id;

    Staff.deleteOne({ id: id })
        .then((result) => {
            res.redirect('/staffs');
        })
        .catch(err => console.log(err));
}




module.exports = {
    indexStaff,  
    readAllStaff,
    deleteOneStaff
}