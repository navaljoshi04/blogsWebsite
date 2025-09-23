import { Router } from "express";
import create from "../controllers/blogController.js";
import isAuthenticated from "../middlewares/authMiddleware.js";

const blogRoute = Router();

blogRoute.post("/create", isAuthenticated,create);

export default blogRoute