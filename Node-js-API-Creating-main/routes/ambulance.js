const express = require('express');
const router = express.Router();
const multer = require('multer');
const Ambulance = require('../models/Ambulance');

const storage = multer.diskStorage({
    de: function(req,file,cd){
        cd(null,'./uploads/');
    },
    filename: function(req, file, cd){
        cd(null, new Date().toISOString()+ file.originalname);
    }
})
const fileFilter = (req,file, cd) =>{
    // code for reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype === 'image/png'){
        cd(null, true);
    }
    else{
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

// get all ambulance details
router.get('/', async (req, res) => {
    try {
        const ambulance = await Ambulance.find();
        res.json(ambulance);
    } catch (err) {
        res.json({ message: err });
    }
});

// submit ambulance details
router.post('/', upload.single('Image'), async (req, res) => {
    console.log(req.file);
    const ambulance = new Ambulance ({
        organizationName: req.body.organizationName,
        Location: req.body.Location,
        aContact: req.body.aContact,
        dutyHrs: req.body.dutyHrs,
        noOfAmbulance: req.body.noOfAmbulance,
        workingHos: req.body.workingHos,
        ambImg: req.body.ambImg,
        regSince: req.body.regSince
    });
    
    try {
        const savedAmbulance= await ambulance.save();
        res.json(savedAmbulance);
    } catch (err) {
        res.json({ message: err });
    }
});

// specific ambulance details
router.get('/:ambulanceId', async (req, res) => {
    try {
        const ambulance = await Ambulance.findById(req.params.ambulanceId);
        res.json(ambulance);
    } catch (err) {
        res.json({ message: err });
    }
});

// delete specific ambulance details
router.delete('/:ambulanceId', async (req, res) => {
    try {
        const removeAmbulance = await Ambulance.remove({ _id: req.params.ambulanceId});
        res.json(removeAmbulance);
    } catch (err) {
        res.json({ message: err });
    }
});

// update ambulance details

router.patch('/:ambulanceId', upload.single('Image'), async (req, res) => {
    try {
        const updateAmbulance = await Ambulance.updateOne(
            { _id: req.params.ambulanceId },
            {
                $set: {
                    organizationName: req.body.organizationName,
                    Location: req.body.Location,
                    aContact: req.body.aContact,
                    dutyHrs: req.body.dutyHrs,
                    noOfAmbulance: req.body.noOfAmbulance,
                    // ambImg: req.body.ambImg,
                    regSince: req.body.regSince,
                    workingHos: req.body.workingHos
                }
            }
        );
        res.json(updateAmbulance);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
