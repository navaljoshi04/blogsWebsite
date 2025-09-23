import { Router } from "express";
import create from "../controllers/blogController.js";
import isAuthenticated from "../middlewares/authMiddleware.js";
import upload from '../middlewares/multerMiddleware.js'

const blogRoute = Router();

blogRoute.post("/create", isAuthenticated, upload.array("file", 5), create);

export default blogRoute