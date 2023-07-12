const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AssignmentSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    mentor_id: {
        type: String,
        required: true,
    },
    file :{
        type: file,
        required: true,
    },
    feedback :{
        type: Array,
        default: [],
    },
    grades :{
        type : Array,
        default : [],
    }
});

module.exports = mongoose.model('Assignment', AssignmentSchema);