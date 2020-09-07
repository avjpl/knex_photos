const express = require('express');
const router = express.Router();

const photosRoute = require('./photos');

router.use('/photos', photosRoute);

module.exports = router;
