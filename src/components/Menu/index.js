import React from "react";
import Logo from "../../assets/LogoAluraflix.png";

import "./menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Aluraflix Logo" />
      </a>
    </nav>
  );
}

export default Menu;
