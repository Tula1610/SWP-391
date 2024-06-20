const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        unique : true,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        unique : true,
        required : true
    },
    role : String
},{
    timestamps : true
})


const userModel =  mongoose.model("user",userSchema)


module.exports = userModel