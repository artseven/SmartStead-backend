const express         = require('express');
const passport        = require('passport');
const bcrypt          = require('bcrypt');
const UserModel       = require('../models/user-model');
const calendarRouter  = express.Router();
