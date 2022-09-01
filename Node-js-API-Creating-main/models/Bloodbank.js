const mongoose = require('mongoose');

const BBSchema = mongoose.Schema({
    Contact: {
        type: String,
        require: true
    },
    APositive: {
        type: String,
        require: true
    },
    ANegative: {
        type: String,
        require: true
    },
    BPositive: {
        type: String,
        require: true
    },
    BNegative: {
        type: String,
        require: true
    },
    
    OPositive: {
        type: String,
        require: true
    },
    ONegative: {
        type: String,
        require: true
    },
    ABPositive: {
        type: String,
        require: true
    },
    ABNegative: {
        type: String,
        require: true
    },
    Note: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('Bloodbank_Details', BBSchema);