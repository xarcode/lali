const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const FellowSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email :{
        type: String,   
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    attendence: {
        type: Number,
        default: 0,
    },
    assignments: {
        type: Array,
        default : [],
    },
    uploadedAssignments: {
        type: Array,
        default : [],
    },
});



module.exports = mongoose.model('Fellow', FellowSchema);