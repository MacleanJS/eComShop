import React from "react";
import { deleteFromCart, getCart } from "../../services/shoes";
import { useState, useEffect } from "react";
import ShoeCont from "../ShoeCont/ShoeCont";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import styles from "./CartPage.module.scss";

const CartPage = () => {
    const [shoes, setShoes] = useState(null);
    const [price, setPrice] = useState(0);
    const [updated, setUpdated] = useState(0);
    useEffect(() => {
        const wrapper = async () => {
            const allShoes = await getCart();
            setShoes(allShoes);
            const totalPrice = allShoes.reduce((acc, x) => acc + x.price, 0);
            setPrice(totalPrice);
        };
        wrapper();
    }, [updated]);

    console.log(shoes, price);

    return (
        <div className={styles.page_container}>
            <div className={styles.left_side}>
                <h2>Secure Checkout</h2>
                <CheckoutItem
                    shoes={shoes}
                    updated={updated}
                    setUpdated={setUpdated}
                />
            </div>
            <div className={styles.right_side}>
                <div>
                    <h2 className={styles.promo_text}>Promo Code</h2>
                    <div className={styles.promo_code}>
                        <input type="text" id="code" name="code" />
                        <button type="submit">Apply</button>
                    </div>
                    <div className={styles.price_section}>
                        <div className={styles.price_section__left}>
                            <p>Subtotal: </p>
                            <p>Shipping: </p>
                            <p>Total: </p>
                        </div>
                        <div className={styles.price_section__right}>
                            <p>$ {price}</p>
                            <p>$ 9.99</p>
                            <p>$ {price + 10}</p>
                        </div>
                    </div>
                    <button className={styles.checkout_btn}>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
