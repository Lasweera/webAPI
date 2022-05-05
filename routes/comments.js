const express = require("express");
const jwt = require("jsonwebtoken");
const Comment = require("../models/comments");
const router = express.Router();
router.use(express.json());

SECRET_KEY = "123456789";

// GET ALL
router.get("/", async (req, res) => {
  
  try {
    let comment = await Comment.find().sort({ name: "asc" });
    return res.send(comment);
  } catch (ex) {
    return res.status(500).send("Error: " + ex.message);
  }
});

// GET COMMENT BY CATID
router.get("/:catId", async (req, res) => {
  
  try {
    let comment = await Comment.find({catId: req.params.catId}).sort({ name: "asc" });
    return res.send(comment);
  } catch (ex) {
    return res.status(500).send("Error: " + ex.message);
  }
});


//Add comment
router.post("/", async (req, res) => {
  try {
    let comment = new Comment({
      catcomment: req.body.catcomment,
      userid: req.body.userid,
      comdate: req.body.comdate,
      catId: req.body.catId,
    });

    comment1 = await comment.save();
    return res.send(comment1);
  } catch (ex) {
    return res.status(500).send("Error: " + ex.message);
  }
});

//Update comments
router.put("/:commentId", async (req, res) => {
  let comment = await Comment.findById(req.params.commentId);
  if (!comment) {
    return res.status(404).send("The given ID does not exist on our system");
  }


  comment.set({ catcomment: req.body.catcomment });
  comment = await comment.save();
  res.send(comment);
});

//Delete comments
router.delete("/:commentId", async (req, res) => {
  const token = req.header("x-jwt-token");
  if (!token) return res.status(401).send("Access is denied. No token found");

  // Check whether valid and authenticated
  try {
    jwt.verify(token, SECRET_KEY);
  } catch (e) {
    return res.status(400).send("Invalid token");
  }

  let decoded = jwt.decode(token, SECRET_KEY);
  if (!decoded.isAdmin) {
    return res.status(403).send("Forbidden. You don't have access to this endpoint")
  }

  let comment = await Comment.findOneAndDelete({ _id: req.params.commentId });
  if (!comment) {
    return res.status(404).send("The given ID does not exist on our system");
  }

  res.send(comment);
});

module.exports = router;
