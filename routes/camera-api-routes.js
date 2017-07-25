const express = require('express');
const ensure = require('connect-ensure-login');
const router = express.Router();
const path = require('path');
const ShoppingItem = require('../models/shopping-list.js');