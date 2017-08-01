var request = require("request");
const express = require('express');
const router = express.Router();

require('dotenv').config();


var options = {
    method: 'POST',
    url: 'https://api.home.nest.com/oauth2/access_token',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    form: {
        client_id: (process.env.CLIENT_ID),
        client_secret: (process.env.CLIENT_SECRET),
        grant_type: (process.env.GRANT_TYPE),
        code: (process.env.CODE)
    }
};

request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});