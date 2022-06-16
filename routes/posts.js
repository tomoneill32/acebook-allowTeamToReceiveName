const express = require("express");
const router = express.Router();
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './public/post-uploads/')
  }
})

var upload = multer({ storage: storage })

const PostsController = require("../controllers/posts");

router.get("/", PostsController.Index);
router.post("/", upload.single('myImage'), PostsController.Create);
router.post("/create_comment", PostsController.CreateComment);
router.post("/add_like", PostsController.AddLike);

module.exports = router;
