import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./CheckItemComp.module.scss";
import { deleteFromCart } from "../../../services/shoes";

const CheckItemComp = ({
    id,
    name,
    img,
    price,
    fav,
    size,
    updated,
    setUpdated,
}) => {
    const handleClick = async () => {
        await deleteFromCart(id);
        setUpdated(updated + 1);
        console.log("deleted from cart");
    };

    return (
        <div>
            <div className={styles.item_container}>
                <img
                    className={styles.item_container__img}
                    src={img}
                    alt="image of show"
                />
                <h3 className={styles.item_container__name}>
                    {name} ({size})
                </h3>
                <h4 className={styles.item_container__price}>$ {price}</h4>
                <button onClick={handleClick} className={styles.remove_btn}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CheckItemComp;
