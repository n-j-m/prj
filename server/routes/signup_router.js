"use strict";

import SignupController from "../controllers/signup_controller";

import {Router} from "express";

const router = Router();

const signupRoute = router.route("/signup");

signupRoute
  .post((req, res) => {
    SignupController.signup(
      req.body.username,
      req.body.password,
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        nickname: req.body.nickname
      }
    ).then((profile) => {
      res.json(profile);
    }).catch((error) => {
      res.send(error);
    });
  });

export default router;