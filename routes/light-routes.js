const express = require('express');
const http = require('http');
const router = express.Router();
const request = require('request');


router.post('/api/lights/off', (req, res, next) => {
    
        //options
    var options = {
        url: 'https://www.meethue.com/api/sendmessage?token=8ee7d03f19ec6cc3b9ed11229e5689b1a59b34f1a4575fad8127d5a0b5f77014',
        method: 'POST',
        headers: headers,
        form: {
            "clipmessage": {
                bridgeId: "001788fffe4c72e9",
                clipCommand: {
                    url: "/api/0/groups/0/action",
                    method: "PUT",
                    body: { "on": false }
                }
            }
        }
    }


    //Start the request
    request(options, function(error, response, body) {
        // console.log('BODY before' + body);
        if (!error && response.statusCode == 200) {
            // Print out the response body
            console.log("Response body" + body)
        }
    });
});

module.exports = router;