import { Router } from "express";

import signup from "../controllers/authController.js";

const authRoute = Router();

authRoute.post('/signup',signup)

export default authRoute