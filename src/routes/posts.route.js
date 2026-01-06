import express from "express";

import postControllers from "../controllers/post.controllers.js";

const postRoute = express.Router();

postRoute.get("/", postControllers.getAll);

export default postRoute;
