const Staff = require('../models/staffSchema');

const indexStaff = (req, res) => {
    res.send('<h1>This is staff page</h1>');;
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





module.exports = {
    indexStaff,  
    readAllStaff
}