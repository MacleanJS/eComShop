import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./ShoeComp.module.scss";

const ShoeComp = ({ id, name, img, price, fav }) => {
    return (
        <div>
            <NavLink to={`/shoes/${id}`}>
                <div className={styles.shoe_container}>
                    <h3>{name}</h3>
                    <img src={img} alt="image of show" />
                    <h4>$ {price}</h4>
                </div>
            </NavLink>
        </div>
    );
};

export default ShoeComp;
