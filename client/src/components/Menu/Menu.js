// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Menu.css";

// const Menu = () => {
//   const [menu, setMenu] = useState([]);
//   const [message, setMessage] = useState("");

//   // Fetch menu items from backend
//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/menu");
//         setMenu(res.data); // ✅ directly use backend data (including image field)
//       } catch (err) {
//         console.error("Error fetching menu:", err);
//       }
//     };
//     fetchMenu();
//   }, []);

//   // Add item to cart
//   const addToCart = async (item) => {
//     try {
//       await axios.post("http://localhost:5000/api/cart/add", {
//         itemId: item._id,
//         quantity: 1,
//       });
//       setMessage(`${item.name} added to cart!`);
//       setTimeout(() => setMessage(""), 2000);
//     } catch (err) {
//       console.error(err);
//       setMessage("Failed to add item.");
//       setTimeout(() => setMessage(""), 2000);
//     }
//   };

//   // Get unique categories
//   const categories = [...new Set(menu.map((item) => item.category))];

//   return (
//     <div className="menu-page">
//       {message && <div className="add-message">{message}</div>}

//       {categories.map((category) => (
//         <div key={category} className="category-section">
//           <h2 className="category-title">{category}</h2>
//           <div className="cards-container">
//             {menu
//               .filter((item) => item.category === category)
//               .map((item) => (
//                 <div className="menu-card" key={item._id}>
//                   {/* ✅ Show backend image if exists, else show placeholder */}
//                   {item.image ? (
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="menu-img"
//                     />
//                   ) : (
//                     <div className="menu-img placeholder">
//                       No image available
//                     </div>
//                   )}

//                   <h3>{item.name}</h3>
//                   <p>₹{item.price}</p>
//                   <button
//                     className="add-cart-btn"
//                     onClick={() => addToCart(item)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Menu;





//  import React, { useState, useEffect } from "react";
//  import axios from "axios";
//  import "./Menu.css";

//  const Menu = () => {
//   const [menu, setMenu] = useState([]);
//    const [message, setMessage] = useState("");

//   //Fetch menu items from backend
//    useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const res = await axios.get("https://bakery-backend-u073.onrender.com/api/menu");

//         // Assign images dynamically based on item index
//         const menuWithImages = res.data.map((item, index) => ({
//           ...item,
//           img: `images/download${index + 1}.jpg`, // download1.jpg, download2.jpg, ...
//         }));

//         setMenu(menuWithImages);
//       } catch (err) {
//         console.error("Error fetching menu:", err);
//       }
//     };
//     fetchMenu();
//   }, []);

//   // Add item to cart
//   const addToCart = async (item) => {
//     try {
//       await axios.post("https://bakery-backend-u073.onrender.com/api/cart/add", {
//         itemId: item._id,
//         quantity: 1,
//       });
//       setMessage(`${item.name} added to cart!`);
//       setTimeout(() => setMessage(""), 2000);
//     } catch (err) {
//       console.error(err);
//       setMessage("Failed to add item.");
//       setTimeout(() => setMessage(""), 2000);
//     }
//   };

//   // Get unique categories
//   const categories = [...new Set(menu.map((item) => item.category))];

//   return (
//     <div className="menu-page">
//       {message && <div className="add-message">{message}</div>}

//       {categories.map((category) => (
//         <div key={category} className="category-section">
//           <h2 className="category-title">{category}</h2>
//           <div className="cards-container">
//             {menu
//               .filter((item) => item.category === category)
//               .map((item) => (
//                 <div className="menu-card" key={item._id}>
//                   <img src={item.img} alt={item.name} className="menu-img" />
//                   <h3>{item.name}</h3>
//                   <p>₹{item.price}</p>
//                   <button
//                     className="add-cart-btn"
//                     onClick={() => addToCart(item)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Menu;








import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Menu.css";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch menu items from backend
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.get("https://bakery-backend-u073.onrender.com/api/menu");
        setMenu(res.data); // ✅ directly use backend data including image field
      } catch (err) {
        console.error("Error fetching menu:", err);
      }
    };
    fetchMenu();
  }, []);

  // Add item to cart
  const addToCart = async (item) => {
    try {
      await axios.post("https://bakery-backend-u073.onrender.com/api/cart/add", {
        itemId: item._id,
        quantity: 1,
      });
      setMessage(`${item.name} added to cart!`);
      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      console.error(err);
      setMessage("Failed to add item.");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  // Get unique categories
  const categories = [...new Set(menu.map((item) => item.category))];

  return (
    <div className="menu-page">
      {message && <div className="add-message">{message}</div>}

      {categories.map((category) => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="cards-container">
            {menu
              .filter((item) => item.category === category)
              .map((item) => (
                <div className="menu-card" key={item._id}>
                  {/* Use Atlas image if exists, else show local placeholder */}
                  <img
                    src={item.image ? item.image : "/images/placeholder.jpg"}
                    alt={item.name}
                    className="menu-img"
                  />
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <button
                    className="add-cart-btn"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;

