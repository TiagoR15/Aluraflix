import React from "react";
import Logo from "../../assets/LogoAluraflix.png";
import { Link } from "react-router-dom";
import Button from "../Button";

import "./menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Aluraflix Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/registration/video">
        New Video
      </Button>
    </nav>
  );
}

export default Menu;
