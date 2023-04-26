import React from "react";
import styles from "./ShowcaseItem.module.scss";

const ShowcaseItem = ({ name, img, price }) => {
    return (
        <div>
            <img className={styles.showcase_item__img} src={img} />
            <p className="legend">
                {name} - ${price}
            </p>
        </div>
    );
};

export default ShowcaseItem;
