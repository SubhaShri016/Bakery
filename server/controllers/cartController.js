const MenuItem = require("../models/MenuItem");

let cart = [];

const addToCart = async (req, res) => {
  const { itemId, quantity } = req.body;
  if (!itemId || !quantity) return res.status(400).json({ message: "itemId and quantity required" });

  try {
    const item = await MenuItem.findById(itemId);
    if (!item) return res.status(404).json({ message: "Menu item not found" });

    // Check if already in cart
    const existing = cart.find(i => i.itemId === itemId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        itemId,
        name: item.name,
        price: item.price,
        category: item.category,
        quantity
      });
    }

    res.json({ message: "Item added to cart", cart });
  } catch (err) {
    res.status(500).json({ message: "Error adding item", error: err.message });
  }
};

const getCart = (req, res) => res.json(cart);

const clearCart = (req, res) => {
  cart = [];
  res.json({ message: "Cart cleared" });
};



const removeFromCart = (req, res) => {
  const { itemId } = req.params;
  const index = cart.findIndex(i => i.itemId === itemId);
  if (index === -1) return res.status(404).json({ message: "Item not in cart" });
  cart.splice(index, 1);
  res.json({ message: "Item removed", cart });
};

module.exports = { addToCart, getCart, clearCart, removeFromCart, cart };

