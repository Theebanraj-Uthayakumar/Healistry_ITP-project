const mongoose = require('mongoose');

const LabSchema = mongoose.Schema({
    TestName: {
        type: String,
        require: true
    },
    Procedure: {
        type: String,
        require: true
    },
    Fee: {
        type: String,
        require: true
    },
    Time: {
        type: String,
        require: true
    },
    Image: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('Lab_Details', LabSchema);