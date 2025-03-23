const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const memeRoutes = require("./routes/memeRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/memes", memeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
