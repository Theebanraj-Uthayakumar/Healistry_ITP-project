const express = require('express');
const router = express.Router();
const Bloodbank = require('../models/Bloodbank');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cd) {
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
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

//GET ALL THE BLOODBANK DETAILS
router.get('/', async (req, res) => {
    try {
        const bloodbank = await Bloodbank.find();
        res.json(bloodbank);
    } catch (err) {
        res.json({ message: err });
    }
});

//SUBMIT BLOODBANK INFORMATION
router.post('/', upload.single('Image'), async (req, res) => {
    console.log(req.file);
    const bloodbank = new Bloodbank({
        Contact: req.body.Contact,
        APositive: req.body.APositive,
        ANegative: req.body.ANegative,
        BPositive: req.body.BPositive,
        BNegative: req.body.BNegative,
        ABPositive: req.body.ABPositive,
        ABNegative: req.body.ABNegative,
        OPositive: req.body.OPositive,
        ONegative: req.body.ONegative,
        Note: req.body.Note,
    });

    try {
        const savedBloodbank = await bloodbank.save();
        res.json(savedBloodbank);
    } catch (err) {
        res.json({ message: err });
    }
});

//SPECIFIC BLOODBANK
router.get('/:bloodbankId', async (req, res) => {
    try {
        const bloodbank = await Bloodbank.findById(req.params.bloodbankId);
        res.json(bloodbank);
    } catch (err) {
        res.json({ message: err });
    }
});

//DELETE SPECIFIC BLOODBANK
router.delete('/:bloodbankId', async (req, res) => {
    try {
        const removeBloodbank = await Bloodbank.remove({ _id: req.params.bloodbankId });
        res.json(removeBloodbank);
    } catch (err) {
        res.json({ message: err });
    }
});

//UPDATE A BLOODBANK DETAILS
router.patch('/:bloodbankId', upload.single('Image'), async (req, res) => {
    try {
        const updateBloodbank = await Bloodbank.updateOne(
            { _id: req.params.bloodbankId },
            {
                $set: {
                    Contact: req.body.Contact,
                    APositive: req.body.APositive,
                    ANegative: req.body.ANegative,
                    BPositive: req.body.BPositive,
                    BNegative: req.body.BNegative,
                    ABPositive: req.body.ABPositive,
                    ABNegative: req.body.ABNegative,
                    OPositive: req.body.OPositive,
                    ONegative: req.body.ONegative,
                    Note: req.body.Note,
                }
            }
        );
        res.json(updateBloodbank);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;