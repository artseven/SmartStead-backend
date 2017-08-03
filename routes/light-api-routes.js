const express = require('express');
const ensure = require('connect-ensure-login');
const ensureLoggedInApiVersion = require('../lib/ensure-logged-in-api');
const path = require('path');
const http = require('http');
// const https = require('https');
const request = require('request');
const router = express.Router();
require('dotenv').config();

router.post('/api/lights/on', (req, res, next) => {
    console.log("LIGHTS ON");
    var options = {
        method: 'POST',
        url: 'https://www.meethue.com/api/sendmessage',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        form: {
            token: (process.env.PHILIPS_TOKEN),
            clipmessage: 'bridgeId: "001788fffe4c72e9", clipCommand: { url:\n"/api/0/groups/0/action", method: "PUT", body:\n{"on":true, "bri":200} } '
        }
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });
});

router.post('/api/lights/off', (req, res, next) => {
    // options
    console.log('lights off');
    var options = {
        method: 'POST',
        url: 'https://www.meethue.com/api/sendmessage',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        form: {
            token: (process.env.PHILIPS_TOKEN),
            clipmessage: 'bridgeId: (process.env.BRIDGE_ID), clipCommand: { url:\n"/api/0/groups/0/action", method: "PUT", body:\n{"on":false, "bri":0} } '
        }
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });
});

router.post('/api/lights/dimmer', (req, res, next) => {
    // options

    var options = {
        method: 'POST',
        url: 'https://www.meethue.com/api/sendmessage',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        form: {
            token: (process.env.PHILIPS_TOKEN),
            clipmessage: 'bridgeId: (process.env.BRIDGE_ID), clipCommand: { url:\n"/api/0/groups/0/action", method: "PUT", body:\n{"on":true, "bri":50} } '
        }
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });
});

module.exports = router;