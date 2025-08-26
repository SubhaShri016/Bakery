const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true }, // Cakes, Pastries, etc.
  image: { type: String } // optional
});

module.exports = mongoose.model("MenuItem", menuItemSchema);
