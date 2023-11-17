import { useState } from "react";
import "./Header.css";

import { NavLink } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const handleToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <h1>&lt; Fullstack Developer /&gt;</h1>
      <ul className={active}>
        <li className="nav__item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/sobremim">Blog</NavLink>
        </li>
        <li className="nav__item">
          <NavLink>Projetos</NavLink>
        </li>
        <li className="nav__item">
          <NavLink>Contato</NavLink>
        </li>
      </ul>

      <div onClick={handleToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Header;
