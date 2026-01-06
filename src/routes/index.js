import express from "express";

const router = express.Router();

import postRoute from "./posts.route.js";

router.use("/posts", postRoute);

export default router;
