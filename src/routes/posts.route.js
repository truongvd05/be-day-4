const express = require("express");

const postControllers = require("@/controllers/post.controllers");

const router = express.Router();

router.get("/", postControllers.getAll);

module.exports = router;
