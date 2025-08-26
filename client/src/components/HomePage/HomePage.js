import React from "react";
import "./HomePage.css";
import Navbar from "../Navbar/Navbar"; // adjust path if needed


const HomePage = () => {
  return (

  
    <div className="home-container">
     
     

      <div className="left-half">
        <img src="/images/heroimg.jpg" alt="Bakery" className="hero-image" />
      </div>

      <div className="right-half">
      
       
        <div className="text-card">
          <h1 className="bakery-name">A Golden Son on a Mother's Lap</h1>
          <p className="bakery-subtext">
            Homemade with ❤️, Served with Warmth
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
