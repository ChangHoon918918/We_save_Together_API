/** import Library */
import { Router } from "express";
/** import Controller */
import authController from "../controller/authController.js";

/** Create router */
const authRouter = Router();

/** Routing */
authRouter
    .route('/auth/signup')
    .post(authController.signup);

export default authRouter;