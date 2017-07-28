const express = require('express');
const ensure = require('connect-ensure-login');
const ensureLoggedInApiVersion = require('../lib/ensure-logged-in-api');
const router = express.Router();
const path = require('path');
const ShoppingItem = require('../models/shopping-list.js');
const UserModel = require('../models/user-model.js')


module.exports = router;