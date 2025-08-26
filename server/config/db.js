const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    require('dotenv').config();
    const mongoURI = process.env.MONGO_URI;

    console.log("Connecting to MongoDB at:", mongoURI);
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
