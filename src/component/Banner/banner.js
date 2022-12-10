import React, { Component } from "react";
import "./banner.css";
import img from "./banner.jpg";
class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        
          <img src={img} />
        <button className="btn" type="submit">Buy Now</button>
      </div>
    );
  }
}
export default Banner;
