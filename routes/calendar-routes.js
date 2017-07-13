const express    = require('express');
const passport   = require('passport');
const bcrypt     = require('bcrypt');
const User       = require('../models/user');
const authRoutes = express.Router();
