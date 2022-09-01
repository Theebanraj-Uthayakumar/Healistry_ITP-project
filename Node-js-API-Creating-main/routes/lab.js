const express = require('express');
const router = express.Router();
const Lab = require('../models/Lab');
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
        const lab = await Lab.find();
        res.json(lab);
    } catch (err) {
        res.json({ message: err });
    }
});

//SUBMIT Equipment INFORMATION
router.post('/', upload.single('Image'), async (req, res) => {
    console.log(req.file);
    const lab = new Lab({
        TestName: req.body.TestName,
        Procedure: req.body.Procedure,
        Fee: req.body.Fee,
        Time: req.body.Time,
        // Image: req.file.path
    });

    try {
        const savedLab = await lab.save();
        res.json(savedLab);
    } catch (err) {
        res.json({ message: err });
    }
});

//SPECIFIC Equipment
router.get('/:labId', async (req, res) => {
    try {
        const lab = await Lab.findById(req.params.labId);
        res.json(lab);
    } catch (err) {
        res.json({ message: err });
    }
});

//DELETE SPECIFIC CLEANING COMPANY
router.delete('/:labId', async (req, res) => {
    try {
        const removeLab = await Lab.remove({ _id: req.params.labId });
        res.json(removeLab);
    } catch (err) {
        res.json({ message: err });
    }
});

//UPDATE A CLEANING COMPANY DETAILS
router.patch('/:labId', upload.single('Image'), async (req, res) => {
    try {
        const updateLab= await Lab.updateOne(
            { _id: req.params.labId },
            {
                $set: {
                    TestName: req.body.TestName,
                    Procedure: req.body.Procedure,
                    Fee: req.body.Fee,
                    Time: req.body.Time,
                    // Image: req.file.path
                }
            }
        );
        res.json(updateLab);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;