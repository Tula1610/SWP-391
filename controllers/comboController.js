const Combo = require("../models/comboSchema");

const indexCombo = (req, res) => {
  res.send("<h1>This is combo page</h1>");
};
const arr = [3, 4, 5]
// CREATE
const createCombo = async (req, res) => {

  const newCombo = new Combo({
    comboId: 4,
    name: "Combo B",
    price: 100,
    serviceId: arr,
  });

  newCombo
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  indexCombo,
  createCombo,
};
