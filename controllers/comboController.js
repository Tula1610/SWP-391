const Combo = require("../models/comboSchema");
const Service = require("../models/serviceSchema");

const indexCombo = (req, res) => {
  res.send("<h1>This is combo page</h1>");
};

// CREATE
const createCombo = async (req, res) => {
  let query = { comboId: req.body.comboId };

  const existingCombo = await Combo.findOne(query);

  if (existingCombo) res.json({ message: 0 });
  else {
    const newCombo = new Combo({
      comboId: req.body.comboId,
      name: req.body.name,
      price: req.body.price,
      serviceId: req.body.serviceId,
    });

    await newCombo
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => console.log(err));
  }
};

// Read all combo
const readAllCombo = async (req, res) => {
  await Combo.find()
    .sort({ id: 1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Read all service of a combo
const readAllServiceOfCombo = async (req, res) => {
  //Find a combo by id
  let query1 = ({ comboId: req.params.id })
  const combo = await Combo.findOne(query1);

  //Find all service by service id that are stored in a combo
  let query2 = ({ id: { $in: combo.serviceId } })
  await Service.find(query2)
    .sort({ id: 1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// DELETE
const deleteOneCombo = async (req, res) => {
  let query = { comboId: req.params.id.toString() };

  await Combo.deleteOne(query)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  indexCombo,
  createCombo,
  readAllCombo,
  readAllServiceOfCombo,
  deleteOneCombo,
};
