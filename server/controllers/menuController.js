const MenuItem = require("../models/MenuItem");

// GET all menu items or by category
const getMenu = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const items = await MenuItem.find(filter);
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching menu" });
  }
};

// POST new menu item
const addMenuItem = async (req, res) => {
  try {
    const { name, price, category, image } = req.body;
    if (!name || !price || !category)
      return res.status(400).json({ message: "Name, price, and category are required" });

    const newItem = new MenuItem({ name, price, category, image });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Error adding menu item" });
  }
};

module.exports = { getMenu, addMenuItem };
