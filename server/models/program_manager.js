const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProgramManagerSchema = new Schema({
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
    mentor_id: {
        type: Array,
        default: [],
    },
    feedbacks: {
        type: Array,
        default: [],
    },
});

module.exports = mongoose.model('ProgramManager', ProgramManagerSchema);