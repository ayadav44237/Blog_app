import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <Link className={styles.navbarBrand} to="/">
        BLOGAPP
      </Link>
      <div className={styles.navbarCollapse}>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/login">
              Login
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/signup">
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
