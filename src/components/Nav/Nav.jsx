import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
    return (
        <nav>
            <NavLink to="/shoes">
                <p className={styles.navText}>HYPE SHOES</p>
            </NavLink>
            <NavLink to="/shoes/cart">
                <p className={styles.navText}>CART</p>
            </NavLink>
        </nav>
    );
};

export default Nav;
