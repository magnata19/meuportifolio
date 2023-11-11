import styles from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>Davidson</h1>
        <ul >
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
    </nav>
  );
};

export default Navbar;
