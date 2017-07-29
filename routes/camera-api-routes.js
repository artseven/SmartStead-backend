const express = require('express');
const ensure = require('connect-ensure-login');
const http = require('http');
const router = express.Router();
const path = require('path');
const request = require('request');


router.post('/api/camera/left', (req, res, next) => {
    var options = {
        method: 'GET',
        url: 'http://usa22543.mytenvis.org/cgi-bin/hi3510/ptzctrl.cgi',
        qs: { '-step': '1', '-act': 'left', '-speed': '45' },
        headers: { authorization: 'Basic YWRtaW46dGVudmlzMUA=' }
    };


    request(options, function(error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });
});

// router.post('/api/camera/right', (req, res, next) => {
//     var options = {
//         method: 'GET',
//         url: 'http://usa22543.mytenvis.org/cgi-bin/hi3510/ptzctrl.cgi',
//         qs: { '-step': '1', '-act': 'right', '-speed': '45' },
//         headers: { authorization: 'Basic YWRtaW46dGVudmlzMUA=' }
//     };

//     request(options, function(error, response, body) {
//         if (error) throw new Error(error);

//         console.log(body);
//     });
// });

// router.post('/api/camera/down', (req, res, next) => {
//     var options = {
//         method: 'GET',
//         url: 'http://usa22543.mytenvis.org/cgi-bin/hi3510/ptzctrl.cgi',
//         qs: { '-step': '1', '-act': 'down', '-speed': '45' },
//         headers: { authorization: 'Basic YWRtaW46dGVudmlzMUA=' }
//     };

//     request(options, function(error, response, body) {
//         if (error) throw new Error(error);

//         console.log(body);
//     });
// });

// router.post('/api/camera/up', (req, res, next) => {
//     var options = {
//         method: 'GET',
//         url: 'http://usa22543.mytenvis.org/cgi-bin/hi3510/ptzctrl.cgi',
//         qs: { '-step': '1', '-act': 'up', '-speed': '45' },
//         headers: { authorization: 'Basic YWRtaW46dGVudmlzMUA=' }
//     };

//     request(options, function(error, response, body) {
//         if (error) throw new Error(error);

//         console.log(body);
//     });
// });

module.exports = router;