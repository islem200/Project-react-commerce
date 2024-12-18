import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    
    <header>
      <h1>Electronic Shop</h1>
      <button onClick={()=>{navigate("/about")}}>Click To Know More...</button>
    </header>
  );
};

export default Header;
