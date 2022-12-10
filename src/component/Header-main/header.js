import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="main-head">
      <div className="logo">
        <h3>MRN~~</h3>
      </div>
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
