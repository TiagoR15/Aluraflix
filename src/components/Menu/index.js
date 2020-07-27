import React from "react";
import Logo from "../../assets/LogoAluraflix.png";

import ButtonLink from "./components/ButtonLink";

import "./menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Aluraflix Logo" />
      </a>

      <ButtonLink className="ButtonLink" href="/">
        New Video
      </ButtonLink>
    </nav>
  );
}

export default Menu;
