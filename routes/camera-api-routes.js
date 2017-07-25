const express = require('express');
const ensure = require('connect-ensure-login');

const router = express.Router();
const path = require('path');
const ShoppingItem = require('../models/shopping-list.js');
const Overlook = require('overlook');
const cam = Overlook();
const request = require('request');



router.get('/api/camera',
    ensure.ensureLoggedIn('/login'),
    (req, res, next) => {
        // Camera setuprs
        cam.setup({
                host: '192.168.0.106',
                port: 81,
                user: 'admin',
                pass: 'tenvis1@'
            },
            function(status) {
                if (!status) {
                    console.error('ERROR: can\'t connect');
                } else {
                    console.log(status);
                }
            }
        );
        console.log(cam.status);
        cam.camera_params(console.log);
        console.log(Overlook.status);
        res.render('camera.ejs')
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