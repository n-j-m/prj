"use strict";

import passport from "passport";
import {BasicStrategy} from "passport-http"
import {Strategy} from "passport-local";
import {User} from "../models";

function findUser(username, password, done) {
  User.findOne({
    where: {username}
  })
    .then(user => {
      if (!user) return done(null, false);

      user.verifyPassword(password, (err, isMatch) => {
        if (err) return done(err);

        if (!isMatch) return done(null, false);

        return done(null, user);
      })
    })
    .catch(done);
}

passport.use(new BasicStrategy(findUser));
passport.use(new Strategy(findUser));

const AuthController = {
  isAuthenticated: passport.authenticate(["basic", "local"], { session: true })
};


export default AuthController;