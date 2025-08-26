import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact"; 
import About from "./components/About/About";

function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
      </Routes>
      
    </Router>
  );
}

export default App;
