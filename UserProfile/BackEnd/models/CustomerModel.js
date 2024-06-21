const mongoose = require('mongoose')


const customerSchema = new mongoose.Schema({
    name : {
        type : String,
        unique: true,
        require : true
    },
    FullName : {
        type : String,
        required : true
    },
    Gender : String,
    Address : String,
    Birthday : Date,
    PhoneNumber : {
        type : String,
        unique: true,
        require : true
    },
    Email : {
        type : String,
        unique: true,
        require : true
    },
},{
    timestamps : true
})

const customer =  mongoose.model("customer",customerSchema)

module.exports = customer