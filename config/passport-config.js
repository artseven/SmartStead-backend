const LocalStrategy = require('passport-local').Strategy;
const User          = require('../models/user');
const bcrypt        = require('bcrypt');
passport.serializeUser((userFromDb, next) => {
  next(null, userFromDb._id);
});

passport.deserializeUser((idFromSession, next) => {
  UserModel.findById(
    idFromSession,

    (err, userFromDb) => {
      if (err) {
        next(err);
        return;
      }

      next(null, userFromDb);
    }
  );
});


passport.use(new LocalStrategy(
  {
    usernameField: 'loginEmail',
    passwordField: 'loginPassword'
  },
  (apiEmail, apiPassword, next) => {
    UserModel.findOne(
      { email: apiEmail },
      (err, userFromDb) => {
        if (err) {
          next(err);
          return;
        }

        if (!userFromDb) {
          next(null, false, { message: 'Email invalid, fool.'});
          return;
        }

        if(!bcrypt.compareSync(apiPassword, userFromDb.encryptedPassword)) {
          next(null, false, { message: 'Password invalid, fool.'});
          return;
        }

        next(null, userFromDb);
      }
    );
  }
));
