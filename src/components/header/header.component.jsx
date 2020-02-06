import React, { Component } from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/4.4 crown.svg.svg";
const Header = props => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>

      <Link className="option" to="/contact">
        CONTACT
      </Link>

      <Link className="option" to="/signin">
        SIGN IN
      </Link>
    </div>
  </div>
);
export default Header;
