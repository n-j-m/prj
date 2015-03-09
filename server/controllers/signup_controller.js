"use strict";

import {User, Profile} from "../models";

const SignupController = {

  signup(username, password, handle) {
    return new Promise((resolve, reject) => {
      User.create({username, password})
        .then((user) => {
          // return the new user and create the profile
          Profile.create({handle})
            .then((profile) => {
              console.log("profile:", profile, user);
              resolve(user);
              profile.set("user_id", user.id);
              profile.save();
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

};

export default SignupController;