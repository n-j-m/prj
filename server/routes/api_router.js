import {Router} from "express";
import config from "../config";
import AuthRouter from "./auth_router";
import SignupRouter from "./signup_router";

const versionedRouter = Router();

versionedRouter.use(config.get("apiVersion"), AuthRouter, SignupRouter);

export default versionedRouter;