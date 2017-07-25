const express = require('express');
const ensure = require('connect-ensure-login');
const router = express.Router();
const path = require('path');
const ShoppingItem = require('../models/shopping-list.js');
const Overlook = require('overlook');
const cam = Overlook();


router.get('/api/camera',
    ensure.ensureLoggedIn('/login'),
    (req, res, next) => {
        cam.setup({
                host: 'mycamera.lan',
                port: 81,
                user: 'admin',
                pass: '',
            },
            function(status) {
                if (!status) {
                    console.error('ERROR: can\'t connect');
                } else {
                    console.log(status);
                }
            }
        );
    });

// // use mongoose to get all things in the database
// ShoppingItem.find((err, shoppingItems) => {
//     // if there is an error retrieving, send the error. nothing after res.send(err) will execute
//     if (err) {
//         next(err);
//         return;
//     }
//     res.json(shoppingItems); //return all things in the cart in JSON



module.exports = router;