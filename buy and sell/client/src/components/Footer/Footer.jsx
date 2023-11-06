import React from "react";
import { ListGroup } from "reactstrap";

import logo from "../../assets/images/res-logo.jpg";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo center">
        <img src={logo} alt="logo" className="res-logo" />
        <h5>My Cart</h5>
        <p>Best online shoping, try it out!</p>
      </div>
    </footer>
  );
};

export default Footer;
