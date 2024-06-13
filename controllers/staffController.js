const Staff = require("../models/staffSchema");

const indexStaff = (req, res) => {
  res.send("<h1>This is staff page</h1>");
};

// CREATE
const createStaff = async (req, res) => {
  let query = { id: req.body.id.toString() };
  await Staff.findOne(query).then((result) => {
    if (result) res.json({ message: 0 });
    else {
      const newStaff = new Staff({
        id: req.body.id,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        role: req.body.role,
      });

      newStaff
        .save()
        .then((result) => {
          res.send(result);
        })
        .catch((err) => console.log(err));
    }
  });
};

// READ
const readAllStaff = async (req, res) => {
  await Staff.find()
    .sort({ id: 1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const readOneStaff = async (req, res) => {
  const id = req.params.id;

  await Staff.findOne({ id: id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// DELETE
const deleteOneStaff = async (req, res) => {
  let query = { id: req.params.id };

  await Staff.deleteOne(query)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
};

// UPDATE
const updateOneStaff = async (req, res) => {
  const oldId = req.body.oldId;
  const id = req.body.id;
  let query = { id: id };

  const existingStaff = await Staff.findOne(query);

  if (existingStaff && existingStaff.id !== oldId) res.json({ message: 0 });
  else {
    await Staff.deleteOne({ id: oldId })
      .then(result => console.log("Deleted staff"))
      .catch((err) => console.log(err));

    const newStaff = await new Staff({
      id: id,
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      role: req.body.role,
    });

    await newStaff
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => console.log(err));
  }
};

module.exports = {
  indexStaff,
  readAllStaff,
  readOneStaff,
  deleteOneStaff,
  createStaff,
  updateOneStaff,
};
