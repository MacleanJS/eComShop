import React from "react";
import ShoeComp from "../../components/ShoeComp/ShoeComp";
import styles from "./ShoeCont.module.scss";
import { useParams } from "react-router-dom";

const ShoeCont = ({ shoes }) => {
    const { id } = useParams();
    return (
        <div className={styles.product_grid}>
            {shoes &&
                shoes.map((shoe) => {
                    return (
                        <ShoeComp
                            key={shoe.id}
                            name={shoe.name}
                            img={shoe.img}
                            price={shoe.price}
                            fav={shoe.fav}
                            id={shoe.id}
                        />
                    );
                })}
        </div>
    );
};

export default ShoeCont;
