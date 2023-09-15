const express = require("express");
const router = express.Router();
const blog_controller = require("../controllers/blogController");

router.get("/create", blog_controller.blog_create_get);
router.get("/", blog_controller.blog_index);
router.post("/", blog_controller.blog_create_post);

router.get("/:id", blog_controller.blog_show);
router.delete("/:id", blog_controller.blog_delete);

module.exports = router;
