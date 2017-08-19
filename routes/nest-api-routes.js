const express = require('express');
const request = require("request");
const router = express.Router();
const http = require('http');

require('dotenv').config();


router.post('/api/nest/stats', (req, res, next) => {
    var options = {
        method: 'GET',
        url: 'https://developer-api.nest.com/devices/thermostats/fBPMKukMCSry2ORduyQXdPh71Io6C2rc',
        headers: {
            authorization: 'Bearer c.5LIwqQ6E36pXfDrz3JoIiNLgTkZb7S6hVyzfIXgsQWO4u6C8UuftU0ISBQYX9JKgvTs9zHOFimbHTiJ44bdaeX7RErCxzdIe87a10VlNIKtW5AXCbE5I77NPZZCTqwzmLduP9lTZJP8Antlv',
            'content-type': 'application/x-www-form-urlencoded'
        }
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);

        console.log("STATS " + body);
    });
});


router.post('/api/nest/current', (req, res, next) => {
    var options = {
        method: 'GET',
        url: 'https://developer-api.nest.com/devices/thermostats/fBPMKukMCSry2ORduyQXdPh71Io6C2rc/ambient_temperature_f',
        headers: {
            authorization: 'Bearer c.5LIwqQ6E36pXfDrz3JoIiNLgTkZb7S6hVyzfIXgsQWO4u6C8UuftU0ISBQYX9JKgvTs9zHOFimbHTiJ44bdaeX7RErCxzdIe87a10VlNIKtW5AXCbE5I77NPZZCTqwzmLduP9lTZJP8Antlv',
            'content-type': 'application/x-www-form-urlencoded'
        }
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);
        res.status(200).json({body});
        console.log(body);
    });
})



// router.post('api/nest/current', (req, res, next) => {

//     var options = {
//         method: 'GET',
//         url: 'https://developer-api.nest.com/devices/thermostats/fBPMKukMCSry2ORduyQXdPh71Io6C2rc/ambient_temperature_f',
//         headers: {
//             authorization: 'Bearer c.5LIwqQ6E36pXfDrz3JoIiNLgTkZb7S6hVyzfIXgsQWO4u6C8UuftU0ISBQYX9JKgvTs9zHOFimbHTiJ44bdaeX7RErCxzdIe87a10VlNIKtW5AXCbE5I77NPZZCTqwzmLduP9lTZJP8Antlv',
//             'content-type': 'application/json'
//         },
//         form: {
//             client_id: '6c762d65-9b57-4f87-9c2d-cbb4cf9f0b02',
//             client_secret: 'bHNWHkqV8en9XfWYapN3lfqcg',
//             grant_type: 'authorization_code',
//             code: 'V99XJSGV'
//         }
//     };

//     request(options, function(error, response, body) {
//         if (error) throw new Error(error);

//         console.log(body);
//     });
// })


// router.post('/api/nest/stats', (req, res, next) => {
//     // GET JSON WITH STATS
//     var options = {
//         method: 'GET',
//         url: 'https://developer-api.nest.com/',
//         headers: {
//             authorization: (process.env.NEST_TOKEN),
//             'content-type': 'application/json'
//         },
//         form: {
//             client_id: (process.env.CLIENT_ID),
//             client_secret: (process.env.CLIENT_SECRET),
//             grant_type: (process.env.GRANT_TYPE),
//             code: (process.env.CODE)
//         }
//     };

//     request(options, function(error, response, body) {
//         if (error) throw new Error(error);

//         console.log(body);
//     });
// });




router.post('/api/nest/temperature', (req, res, next) => {
    //POST TEMPERATURE 72
    var options = {
        method: 'PUT',
        url: 'https://developer-api.nest.com/devices/thermostats/fBPMKukMCSry2ORduyQXdPh71Io6C2rc',
        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer c.5LIwqQ6E36pXfDrz3JoIiNLgTkZb7S6hVyzfIXgsQWO4u6C8UuftU0ISBQYX9JKgvTs9zHOFimbHTiJ44bdaeX7RErCxzdIe87a10VlNIKtW5AXCbE5I77NPZZCTqwzmLduP9lTZJP8Antlv'
        },
        body: { target_temperature_f: 74 },
        json: true
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);
        console.log("Body " + body);
    });
});


// router.post('/api/nest/temperature-high', (req, res, next) => {
//     //POST TEMPERATURE 76
//     var options = {
//         method: 'PUT',
//         url: 'https://developer-api.nest.com/devices/thermostats/fBPMKukMCSry2ORduyQXdPh71Io6C2rc',
//         headers: {
//             authorization: '(process.env.NEST_TOKEN)',
//             'content-type': 'application/json'
//         },
//         body: { target_temperature_f: 76 },
//         json: true
//     };

//     request(options, function(error, response, body) {
//         if (error) throw new Error(error);

//         console.log(body);
//     });
// });

module.exports = router;