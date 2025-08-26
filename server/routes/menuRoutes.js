const express = require("express");
const router = express.Router();
const { getMenu, addMenuItem } = require("../controllers/menuController");

// GET all menu items
router.get("/", getMenu);

// POST new item
router.post("/", addMenuItem);

module.exports = router;
