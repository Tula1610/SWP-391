const Staff = require('../models/staffSchema');

const indexStaff = (req, res) => {
    res.send('<h1>This is staff page</h1>');;
}

// CREATE
const createStaff = (req, res) => {
    let query = {id: req.body.id.toString() };
    Staff.findOne(query)
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

const readOneStaff = (req, res) => {
    const id = req.params.id;

    Staff.findOne({ id: id })
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
        .then(() => {
            res.redirect('/staffs');
        })
        .catch(err => console.log(err));
}

// UPDATE
const updateOneStaff = (req, res) => {
    const oldId = req.body.oldId;
    const newId = req.body.newId;
    let query = {id: newId.toString()}
    
    Staff.findOne(query)
        .then((result) => {
            if (result && result.id !== oldId) res.json({ message: 0 });
            else {
                Staff.deleteOne({ id: req.body.oldId })
                    .then(result => res.send(result))
                    .catch(err => console.log(err));

                const newStaff = new Staff({
                    id: req.body.newId,
                    name: req.body.name,
                    phoneNumber: req.body.phoneNumber,
                    role: req.body.role
                });

                newStaff.save()
                    .then(result => res.json(result))
                    .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));
}


module.exports = {
    indexStaff,
    readAllStaff,
    readOneStaff,
    deleteOneStaff,
    createStaff,
    updateOneStaff
}