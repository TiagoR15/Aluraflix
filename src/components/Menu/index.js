import React from "react";
import Logo from "../../assets/LogoAluraflix.png";

import Button from "../Button";

import "./menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Aluraflix Logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        New Video
      </Button>
    </nav>
  );
}

export default Menu;
