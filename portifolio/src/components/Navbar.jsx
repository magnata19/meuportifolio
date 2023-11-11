import { useState } from "react";
import styles from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

import { BiMenuAltLeft } from "react-icons/bi";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [active, setMode] = useState(false);

  const handleToggle = () => {
  
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <h1>&lt; Fullstack Developer /&gt;</h1>
        <div className={styles.navlist}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink>Projetos</NavLink>
            </li>
            <li>
              <NavLink to="/sobremim">Sobre Mim</NavLink>
            </li>
            <li>
              <NavLink>Contato</NavLink>
            </li>
          </ul>
        </div>
        {/* mobal menu */}
        <button className={styles.close_menu} onClick={handleToggle}>
          <BiMenuAltLeft />
        </button>
        <button className={styles.open_menu} onClick={handleToggle}>
          <BiMenuAltRight />
        </button>

        <div className={styles.mobal_menu}>
          <div className={styles.navlist_mobal}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink>Projetos</NavLink>
              </li>
              <li>
                <NavLink to="/sobremim">Sobre Mim</NavLink>
              </li>
              <li>
                <NavLink>Contato</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
