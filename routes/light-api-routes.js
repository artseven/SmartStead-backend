const express = require('express');
const ensure = require('connect-ensure-login');
const ensureLoggedInApiVersion = require('../lib/ensure-logged-in-api');
const router = express.Router();
const path = require('path');
const http = require('http');
const ShoppingItem = require('../models/shopping-list.js');
const UserModel = require('../models/user-model.js')
const request = require('request');

// router.get('api/lights', (req, res, next) => {
//     res => res.json();

// });

router.post('api/lights', (req, res, next) => {

        // set options
        const options = {
            url: `https://www.meethue.com/api/sendmessage?token=8ee7d03f19ec6cc3b9ed11229e5689b1a59b34f1a4575fad8127d5a0b5f77014`,
            body: clipmessage = {
                bridgeId: "001788fffe4c72e9",
                clipCommand: {
                    url: "/api/0/groups/0/action",
                    method: "PUT",
                    body: { "on": false, "bri": 200 }
                }
            }
        }),
    dataType: 'json'
    // headers: {
    //     // 'Authorization': `Bearer ${req.body.accessToken}`,
    //     'Content-Type': 'application/json'
    // }
};

// post request
request.post(options, (err, response, body) => {
    // send status to spotify service
    res.status(200).json(body);
});

module.exports = router;