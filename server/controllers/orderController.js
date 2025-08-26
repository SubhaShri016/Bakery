// const cartController = require("./cartController");

// const placeOrder = (req, res) => {
//   if (!cartController.cart.length) {
//     return res.status(400).json({ message: "Cart is empty" });
//   }

//   const totalPrice = cartController.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   // Mock payment delay
// setTimeout(() => {
//   const orderDetails = [...cartController.cart];

//   // ✅ Clear cart manually instead of calling clearCart()
//   cartController.cart.length = 0;

//   res.json({
//     success: true,
//     message: "Payment successful! Order placed.",
//     order: { items: orderDetails, totalPrice, orderDate: new Date() }
//   });
// }, 1000);
// };

// module.exports = { placeOrder };


const cartController = require("./cartController");

const placeOrder = (req, res) => {
  if (!cartController.cart.length) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  const totalPrice = cartController.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Mock payment delay
  setTimeout(() => {
    const orderDetails = [...cartController.cart];

    // Clear cart manually
    cartController.cart.length = 0;

    res.json({
      success: true,
      message: "Payment successful! Order placed.",
      order: { items: orderDetails, totalPrice, orderDate: new Date() },
    });
  }, 1000);
};

module.exports = { placeOrder };
