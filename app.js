const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const layouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const http = require('http');
const bcrypt = require('bcrypt');
const flash = require('connect-flash');
const hue = require('node-hue-api');
const overlook = require('overlook');
const cam = overlook();
const request = require('request');
require('./config/passport-config');
// Load our ENVIRONMENT VARIABLES from the .env file in dev
// require('dotenv').config();
mongoose.connect('mongodb://localhost/smartstead-backend');

const app = express();

//use cross origin resource sharing
const cors = require('cors');
app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'Express - Generated with ArtGenerator';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);
app.use(flash());

app.use(session({
    // Change to create unique access key as a secret string
    secret: 'ArtSecret',
    // These two options are to prevent warnings
    resave: true,
    saveUninitialized: true,
    // cookie: { httpOnly: true, maxAge: 2419200000}
}));

// These need to come AFTER the session middleware
app.use(passport.initialize());
app.use(passport.session());
//---------HERE GO ALL THE ROUTES-------------------
const index = require('./routes/index');
app.use('/', index);

const authRoutes = require('./routes/auth-api-routes');
app.use('/', authRoutes);

const shoppingRoutes = require('./routes/shopping-api-routes');
app.use('/', shoppingRoutes);

const cameraRoutes = require('./routes/camera-api-routes');
app.use('/', cameraRoutes);

const lightRoutes = require('./routes/camera-api-routes');
app.use('/', lightRoutes);
// -------------------------------------------------
// Display the Angular app if no route matches
app.use((req, res, next) => {
    res.sendfile(__dirname + '/public/index.html');
});


// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;