import express from "express";
import {registerController,loginController,testController} from "../controllers/authController.js";
import { requireSign } from "../middlewares/authmiddleware.js";

const routes= express.Router();
routes.post('/register',registerController);
routes.post('/login',loginController);
routes.get('/test',requireSign,testController);

export default routes;