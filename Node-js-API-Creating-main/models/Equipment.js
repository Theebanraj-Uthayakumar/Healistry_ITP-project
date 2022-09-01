const mongoose = require('mongoose');

const EquipmentSchema = mongoose.Schema({

    // EqName
    // Description
    // Purpose
    // Manufacturer
    // Year
    // Image

    EqName: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    Purpose: {
        type: String,
        require: true
    },
    Manufacturer: {
        type: String,
        require: true
    },
    Year: {
        type: String,
        require: true
    },
    Image: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('Equipment_Details', EquipmentSchema);