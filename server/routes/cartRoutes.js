const express = require("express");
const router = express.Router();
const { addToCart, getCart, clearCart, removeFromCart } = require("../controllers/cartController");

router.post("/add", addToCart);
router.get("/", getCart);
router.delete("/", clearCart);




router.delete("/:itemId", removeFromCart);



module.exports = router;
