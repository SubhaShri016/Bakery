// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Cart.css";

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPayment, setShowPayment] = useState(false);

//   // Fetch cart from backend
//   const fetchCart = async () => {
//     try {
//       const res = await axios.get("https://bakery-backend-u073.onrender.com/api/cart");
//       setCart(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const removeItem = async (itemId) => {
//     try {
//       await axios.delete(`https://bakery-backend-u073.onrender.com/api/cart/${itemId}`);
//       fetchCart();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const clearCart = async () => {
//     try {
//       await axios.delete("https://bakery-backend-u073.onrender.com/api/cart");
//       fetchCart();
//       setMessage("Cart cleared!");
//       setTimeout(() => setMessage(""), 2000);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const placeOrder = () => {
//     if (cart.length === 0) {
//       setMessage("Your cart is empty!");
//       return;
//     }
//     setMessage("");
//     setShowPayment(true);
//   };

//   const handlePayment = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.post("https://bakery-backend-u073.onrender.com/api/orders/confirm");
//       if (res.data.success) {
//         setMessage(res.data.message);
//         setShowPayment(false);
//         fetchCart(); // cart will now be empty
//       } else {
//         setMessage("Payment failed. Try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("Payment failed. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const totalPrice = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

//   return (
//     <div className="cart-container">
//       <h2 className="cart-title">Your Cart</h2>

//       {cart.length === 0 ? (
//         <p className="empty-cart">Your cart is empty</p>
//       ) : (
//         <div className="cart-card">
//           {cart.map((item) => (
//             <div className="cart-item" key={item.itemId}>
//               <div className="item-info">
//                 <p className="item-name">{item.name}</p>
//                 <p className="item-quantity">Qty: {item.quantity}</p>
//                 <p className="item-price">₹{item.price * item.quantity}</p>
//               </div>
//               <button className="remove-btn" onClick={() => removeItem(item.itemId)}>✕</button>
//             </div>
//           ))}

//           <div className="cart-total">Total: ₹{totalPrice}</div>

//           <div className="cart-buttons">
//             <button className="place-order-btn" onClick={placeOrder} disabled={loading}>
//               {loading ? "Processing..." : "Place Order"}
//             </button>
//             <button className="clear-cart-btn" onClick={clearCart} disabled={loading}>
//               Clear Cart
//             </button>
//           </div>
//         </div>
//       )}

//       {message && <p className="order-message">{message}</p>}

//       {/* Mock Payment Modal */}
//       {showPayment && (
//         <div className="payment-modal">
//           <div className="payment-content">
//             <h3>Mock Payment</h3>
//             <p>Total Amount: ₹{totalPrice}</p>
//             <button className="pay-btn" onClick={handlePayment} disabled={loading}>
//               {loading ? "Processing..." : "Pay Now"}
//             </button>
//             <button className="cancel-btn" onClick={() => setShowPayment(false)} disabled={loading}>
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;




import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  // Fetch cart from localStorage
  const fetchCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Save cart to localStorage and state
  const updateCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.itemId !== itemId);
    updateCart(updatedCart);
  };

  const clearCart = () => {
    updateCart([]);
    setMessage("Cart cleared!");
    setTimeout(() => setMessage(""), 2000);
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      setMessage("Your cart is empty!");
      return;
    }
    setMessage("");
    setShowPayment(true);
  };

  const handlePayment = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://bakery-backend-u073.onrender.com/api/orders/confirm",
        { cart } // optionally send cart to backend if needed
      );
      if (res.data.success) {
        setMessage(res.data.message);
        setShowPayment(false);
        updateCart([]); // empty cart after payment
      } else {
        setMessage("Payment failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Payment failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div className="cart-card">
          {cart.map((item) => (
            <div className="cart-item" key={item.itemId}>
              <div className="item-info">
                <p className="item-name">{item.name}</p>
                <p className="item-quantity">Qty: {item.quantity}</p>
                <p className="item-price">
                  ₹{item.price * (item.quantity || 1)}
                </p>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeItem(item.itemId)}
              >
                ✕
              </button>
            </div>
          ))}

          <div className="cart-total">Total: ₹{totalPrice}</div>

          <div className="cart-buttons">
            <button
              className="place-order-btn"
              onClick={placeOrder}
              disabled={loading}
            >
              {loading ? "Processing..." : "Place Order"}
            </button>
            <button
              className="clear-cart-btn"
              onClick={clearCart}
              disabled={loading}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}

      {message && <p className="order-message">{message}</p>}

      {/* Mock Payment Modal */}
      {showPayment && (
        <div className="payment-modal">
          <div className="payment-content">
            <h3>Mock Payment</h3>
            <p>Total Amount: ₹{totalPrice}</p>
            <button
              className="pay-btn"
              onClick={handlePayment}
              disabled={loading}
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>
            <button
              className="cancel-btn"
              onClick={() => setShowPayment(false)}
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

