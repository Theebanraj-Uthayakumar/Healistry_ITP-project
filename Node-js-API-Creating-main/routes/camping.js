const express = require('express');
const router = express.Router();
const multer = require('multer');
const Camping = require('../models/Camping');

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

// get all camping details
router.get('/', async (req, res) => {
    try {
        const camping = await Camping.find();
        res.json(camping);
    } catch (err) {
        res.json({ message: err });
    }
});

// submit camping details
router.post('/', upload.single('Image'), async (req, res) => {
    console.log(req.file);
    const camping = new Camping ({
        orgName: req.body.orgName,
        cDate: req.body.cDate,
        cTime: req.body.cTime,
        cContact: req.body.cContact,
        type: req.body.type,
        venue: req.body.venue,
        cImg: req.body.cImg
    });
    
    try {
        const savedCamping= await camping.save();
        res.json(savedCamping);
    } catch (err) {
        res.json({ message: err });
    }
});

// specific Camping details
router.get('/:camId', async (req, res) => {
    try {
        const camping = await Camping.findById(req.params.camId);
        res.json(camping);
    } catch (err) {
        res.json({ message: err });
    }
});

// delete specific camping details
router.delete('/:camId', async (req, res) => {
    try {
        const removeCamping = await Camping.remove({ _id: req.params.camId});
        res.json(removeCamping);
    } catch (err) {
        res.json({ message: err });
    }
});

// update camping details

router.patch('/:camId', upload.single('Image'), async (req, res) => {
    try {
        const updateCamping = await Camping.updateOne(
            { _id: req.params.camId },
            {
                $set: {
                    orgName: req.body.orgName,
                    cDate: req.body.cDate,
                    cTime: req.body.cTime,
                    cContact: req.body.cContact,
                    venue: req.body.venue,
                    type: req.body.type,
                    cImg: req.body.cImg
                }
            }
        );
        res.json(updateCamping);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;