import React, { Component } from "react";
import productImg from "./product.jpg";
import "./card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card-main">
        <h2>Product</h2>
        <div className="cards-all">
          <div class="card">
            <img src={productImg} />
            <div class="container">
              <h4>
                <b>Men Spray</b>
              </h4>
              <p>Body Spray only for men's</p>
            </div>
          </div>
          <div class="card">
            <img src={productImg} />
            <div class="container">
              <h4>
                <b>Men Spray</b>
              </h4>
              <p>Body Spray only for men's</p>
            </div>
          </div>
          <div class="card">
            <img src={productImg} />
            <div class="container">
              <h4>
                <b>Men Spray</b>
              </h4>
              <p>Body Spray only for men's</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
