const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const UserModel = require('../models/user-model');

const router = express.Router();

router.post('api/calendar', (req, res, next) => {
    const clippedMessage = req.body.clipmessage;
    console.log(clippedMessage);
})

module.exports = router;