import React, { Component } from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <ul className="icons">
            <li>
              <a href="#">
                <FaFacebook/>
              </a>
            </li>
            <li>
              <a href="#">
                <FaWhatsappSquare/>
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin/>
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube/>
              </a>
            </li>
          </ul>
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="footer-copyright">
            <p>Copyright @ 2022 All Rights Reserved by Maruf.</p>
          </div>
        </footer>
      </div>
    );
  }
}
