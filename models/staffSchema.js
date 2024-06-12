const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    id: {
        type: Number,
        required: true 
    },
    name: {
        type: String,
        required: true 
    },
    phoneNumber: {
        type: Number,
        required: true 
    },
    role: {
        type: String,
        required: true 
    }
}, { timestamps: true });

const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;