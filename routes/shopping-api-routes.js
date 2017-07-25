const express = require('express');
const ensure = require('connect-ensure-login');
const router = express.Router();
const path = require('path');
const ShoppingItem = require('../models/shopping-list.js');


router.get('/api/cart',
    ensure.ensureLoggedIn('/login'),
    (req, res, next) => {
        // use mongoose to get all things in the database
        ShoppingItem.find((err, shoppingList) => {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err) {
                next(err);
                return;
            }
            res.json(shoppingList); //return all things in the cart in JSON
        });
    });

router.post('/api/cart',
    ensure.ensureLoggedIn('/login'),
    function(req, res, next) {
        // create a new entry in the shoppingList, information comes from Angular Ajax
        ShoppingItem.create({
            name: req.body.productName,
            quantity: req.body.productQuantity,
            bought: false
        }, function(err, shoppingItem) {
            if (err)
                res.send(err);

            //get and return all the items in the ShoppingList after creation of another one
            ShoppingItem.find(function(err, shoppingItems) {
                if (err)
                    res.send(err)
                res.json(shoppingItems);
            });
        });
    });

router.delete('/api/cart/:shoppingitem_id',
    function(req, res) {
        ShoppingItem.remove({
            _id: req.params.shoppingItem_id
        }, function(err, shoppingItem) {
            if (err)
                res.send(err);


            ShoppingItem.find(function(err, items) {
                if (err)
                    res.send(err)
                res.json(items);
            })
        });
    });

module.exports = router;