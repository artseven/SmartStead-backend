const express = require('express');
const ensure = require('connect-ensure-login');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const ShoppingList = require('../models/shopping-list.js');


router.get('/cart',
    ensure.ensureLoggedIn('/login'),
    (req, res, next) => {
        // use mongoose to get all things in the database
        ShoppingList.find((err, shoppingList) => {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err) {
                next(err);
                return;
            }
            res.json(shoppingList); //return all things in the cart in JSON
        });
    });

router.post('/cart',
    ensure.ensureLoggedIn('/login'),
    function(req, res) {
        // create a new entry in the shoppingList, information comes from Angular Ajax
        ShoppingList.create({
            name: req.body.productName,
            quantity: req.body.productQuantity,
            bought: false
        }, function(err, shoppingItem) {
            if (err)
                res.send(err);

            //get and return all the items in the ShoppingList after creation of another one
            ShoppingList.find(function(err, shoppingItems) {
                if (err)
                    res.send(err)
                res.json(shoppingItems);
            });
        });
    });