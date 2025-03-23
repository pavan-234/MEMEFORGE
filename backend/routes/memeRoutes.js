const express = require("express");
const router = express.Router();
const Meme = require("../models/Meme");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Get All Memes
router.get("/", async (req, res) => {
  const memes = await Meme.find();
  res.json(memes);
});

// Upload Meme
router.post("/upload", upload.single("image"), async (req, res) => {
  const { topText, bottomText } = req.body;
  const imageUrl = `data:image/png;base64,${req.file.buffer.toString("base64")}`;
  
  const newMeme = new Meme({ imageUrl, topText, bottomText });
  await newMeme.save();
  
  res.json({ success: true, meme: newMeme });
});

module.exports = router;
