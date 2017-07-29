const express = require('express');
const ensure = require('connect-ensure-login');
const ensureLoggedInApiVersion = require('../lib/ensure-logged-in-api');
const router = express.Router();
const path = require('path');
const http = require('http');
const https = require('https');
const ShoppingItem = require('../models/shopping-list.js');
const UserModel = require('../models/user-model.js')
const request = require('request');
const querystring = require('querystring')
const urlencode = require('urlencode');



router.post('/api/lights/on', (req, res, next) => {
    console.log("MY POST REQUEST STARTS HERE-----")
        // Set the headers
    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'Content-Length': postBody.length
    }

    //the POST request's body data
    var object = {
        bridgeId: "001788fffe4c72e9",
        clipCommand: {
            url: "/api/0/groups/0/action",
            method: "PUT",
            body: {
                "on": true,
                "bri": 200
            }
        }
    };

    var encodedObject = urlencode(object, { charset: "UTF-8" });
    console.log("Encoded" + encodedObject);

    // postBody = querystring.stringify(postData);
    urlencode(object, { charset: 'UTF-8' });
    console.log("ENCODED" + urlencode(object, { charset: 'UTF-8' }));

    // options
    var options = {
        url: 'https://www.meethue.com/api/sendmessage?token=8ee7d03f19ec6cc3b9ed11229e5689b1a59b34f1a4575fad8127d5a0b5f77014',
        method: 'POST',
        headers: headers,
        form: {
            clipmessage: object
                // clipmessage: {
                //     bridgeId: "001788fffe4c72e9",
                //     clipCommand: {
                //         url: "/api/0/groups/0/action",
                //         method: "PUT",
                //         body: {
                //             "on": true,
                //             "bri": 200
                //         }
                //     }
                // }
        }

    }

    // var postreq = https.request(options, function(res) {
    //     //Handle the response
    //     // console.log('BODY before' + body);
    //     if (!error && response.statusCode == 200) {
    //         // Print out the response body
    //         console.log("Response body" + body)
    //     }
    // });
    // postreq.write(postBody);
    // postreq.end();

    //Start the request
    request(options, function(error, response, body) {
        // console.log('BODY before' + body);
        if (!error && response.statusCode == 200) {
            // Print out the response body
            console.log("Response body" + body)
        }
    });
});


// router.post('/api/lights/off', (req, res, next) => {

//     // options
//     // var options = {
//     //     url: 'https://www.meethue.com/api/sendmessage?token=8ee7d03f19ec6cc3b9ed11229e5689b1a59b34f1a4575fad8127d5a0b5f77014',
//     //     method: 'POST',
//     //     headers: headers,
//     //     form: {
//     //         "clipmessage": {
//     //             bridgeId: "001788fffe4c72e9",
//     //             clipCommand: {
//     //                 url: "/api/0/groups/0/action",
//     //                 method: "PUT",
//     //                 body: { "on": false }
//     //             }
//     //         }
//     //     }
//     // }

//     // Start the request
//     request(options, function(error, response, body) {
//         if (!error && response.statusCode == 200) {
//             // Print out the response body
//             console.log(body)
//         }
//     });
// });
//                 bridgeId: "001788fffe4c72e9",
//                 clipCommand: {
//                     url: "/api/0/groups/0/action",
//                     method: "PUT",
//                     body: { "on": false, "bri": 200 }
//                 }
//             }
//         }),
//     dataType: 'json'
//     // headers: {
//     //     // 'Authorization': `Bearer ${req.body.accessToken}`,
//     //     'Content-Type': 'application/json'
//     // }
// };

// // post request
// request.post(options, (err, response, body) => {
//     // send status to spotify service
//     res.status(200).json(body);
// });

module.exports = router;