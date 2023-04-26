import React from "react";
import ShoeComp from "../../components/ShoeComp/ShoeComp";
import { useParams } from "react-router-dom";
import CheckItemComp from "./CheckItemComp/CheckItemComp";

const CheckoutItem = ({ shoes, updated, setUpdated }) => {
    const { id } = useParams();
    return (
        <div>
            {shoes &&
                shoes.map((shoe) => {
                    return (
                        <CheckItemComp
                            key={shoe.id}
                            name={shoe.name}
                            img={shoe.img}
                            price={shoe.price}
                            fav={shoe.fav}
                            size={shoe.size}
                            id={shoe.id}
                            updated={updated}
                            setUpdated={setUpdated}
                        />
                    );
                })}
        </div>
    );
};

export default CheckoutItem;
