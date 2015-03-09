"use strict";

import AuthController from "../controllers/auth_controller";

import {Router} from "express";

const router = Router();

const authRouter = router.route("/login");

authRouter
  .post(AuthController.isAuthenticated, (req, res) => {
    res.json(req.user);
  });

export default router;