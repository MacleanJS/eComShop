import React from "react";
import styles from "./Reviews.module.scss";

const Reviews = ({ img, text, rating }) => {
    return (
        <div className={styles.reviewContainer}>
            <img src={img}></img>
            <p>{text}</p>
            <p>{rating}</p>
        </div>
    );
};

export default Reviews;
