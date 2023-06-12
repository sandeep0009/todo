import express from "express";
import {registerController,loginController} from "../controllers/authController.js";

const routes= express.Router();
routes.post('/register',registerController);
routes.post('/login',loginController);

export default routes;