import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addToCart, getShoeById } from "../../services/shoes";
import Nav from "../../components/Nav/Nav";
import styles from "./IndProdPage.module.scss";

const IndProdPage = () => {
    const { id } = useParams();
    const [shoe, setShoe] = useState(null);
    const navigate = useNavigate();

    const [cartShoe, setCartShoe] = useState({});

    useEffect(() => {
        async function fetchShoe() {
            try {
                const shoe = await getShoeById(id);
                setShoe(shoe);

                setCartShoe({
                    name: shoe.name,
                    price: shoe.price,
                    img: shoe.img,
                    size: "S",
                });
            } catch (error) {
                console.log(error);
            }
        }

        fetchShoe();
    }, [id]);

    if (!shoe) {
        return <div>Loading...</div>;
    }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setCartShoe({ ...cartShoe, size: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addToCart(cartShoe);
        navigate("/shoes/cart");
    };

    return (
        <div className={styles.product_container}>
            <h1 className={styles.header_text}>{shoe.name}</h1>
            <div className={styles.product_info}>
                <img
                    className={styles.product_info__img}
                    src={shoe.img}
                    alt={shoe.name}
                />
                <div className={styles.product_info__price_cart}>
                    <p>Price: ${shoe.price}</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="size">Size:</label>
                        <select id="size" name="size" onChange={handleChange}>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                        <button type="submit">Add to Cart</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default IndProdPage;
