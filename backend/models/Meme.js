const mongoose = require("mongoose");

const MemeSchema = new mongoose.Schema({
  imageUrl: String,
  topText: String,
  bottomText: String,
});

module.exports = mongoose.model("Meme", MemeSchema);
