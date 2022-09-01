const express = require('express');
const router = express.Router();
const Equipment = require('../models/Equipment');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file,cd) {
        cd(null, './uploads/');
    },
    filename: function (req, file, cd) {
       cd(null, new Date().toISOString() + file.originalname);
    }
})

const fileFilter = (req, file, cd) => {
    //reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cd(null, true);
    } else {
        cd(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10
    },
    fileFilter: fileFilter
});

//GET ALL THE Equipment DETAILS
router.get('/', async (req, res) => {
    try {
        const equipment = await Equipment.find();
        res.json(equipment);
    } catch (err) {
        res.json({ message: err });
    }
});

//SUBMIT Equipment INFORMATION
router.post('/', upload.single('Image'), async (req, res) => {
    console.log(req.file);
    const equipment = new Equipment({
        EqName: req.body.EqName,
        Description: req.body.Description,
        Purpose: req.body.Purpose,
        Manufacturer: req.body.Manufacturer,
        Year: req.body.Year,
        // Image: req.file.path
    });

    try {
        const savedEquipment = await equipment.save();
        res.json(savedEquipment);
    } catch (err) {
        res.json({ message: err });
    }
});

//SPECIFIC Equipment
router.get('/:equipmentId', async (req, res) => {
    try {
        const equipment = await Equipment.findById(req.params.equipmentId);
        res.json(equipment);
    } catch (err) {
        res.json({ message: err });
    }
});

//DELETE SPECIFIC CLEANING COMPANY
router.delete('/:equipmentId', async (req, res) => {
    try {
        const removeEquipment = await Equipment.remove({ _id: req.params.equipmentId });
        res.json(removeEquipment);
    } catch (err) {
        res.json({ message: err });
    }
});

//UPDATE A CLEANING COMPANY DETAILS
router.patch('/:equipmentId', upload.single('Image'), async (req, res) => {
    try {
        const updateEquipment= await Equipment.updateOne(
            { _id: req.params.equipmentId },
            {
                $set: {
                    EqName: req.body.EqName, Description: req.body.Description, Purpose: req.body.Purpose, Manufacturer: req.body.Manufacturer, Year: req.body.Year 
                    // Image: req.file.path
                }
            }
        );
        res.json(updateEquipment);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;