import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
    return (
        <nav>
            <NavLink to="/">
                <p className={styles.navText}>BRAND NAME</p>
            </NavLink>
            <NavLink to="/cart">
                <p className={styles.navText}>CART</p>
            </NavLink>
        </nav>
    );
};

export default Nav;
