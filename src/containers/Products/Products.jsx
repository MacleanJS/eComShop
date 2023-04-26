import React from "react";
import { useState, useEffect } from "react";
import { getAllShoes } from "../../services/shoes";
import ShoeCont from "../ShoeCont/ShoeCont";
import styles from "./Products.module.scss";

const Products = () => {
    const [shoes, setShoes] = useState(null);
    useEffect(() => {
        const wrapper = async () => {
            const allShoes = await getAllShoes();
            setShoes(allShoes);
        };
        wrapper();
    }, []);

    console.log(shoes);

    return (
        <div className={styles.products__Wrapper}>
            <h1 className={styles.products__header}>All products</h1>
            <ShoeCont shoes={shoes} />
        </div>
    );
};

export default Products;
