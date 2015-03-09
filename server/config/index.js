"use strict";

import config from "./config";
import {User} from "../models";

export default {
  get: function(key) {
    if (!config[key]) throw new Error(key + ' not found');
    
    return config[key];
  },

  initPassport: function(passport) {
    passport.serializeUser(function(user, done) {
      done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {
      User.findOne({
        where: {id}
      })
        .then(function(user) {
          done(null, user);
        })
        .catch(done);
    });
  }
};
