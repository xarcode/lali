const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MentorSchema = new Schema({
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
    attendance: {
        type: Number,
        default: 0,
    },
    mentees: {
        type: Array,
        default: [],
    },
    feedback_aggregate:{
        type: Number,
    },
    assignments : {
        type: Array,
        default :[],
    }
});

module.exports = mongoose.model('Mentor', MentorSchema);