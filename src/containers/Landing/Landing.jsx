import React from "react";
import styles from "./Landing.module.scss";
import landingGIF from "../../assets/landingGIF.gif";

const Landing = () => {
    const handleClick = () => {
        window.scrollTo({ top: window.innerHeight * 2, behavior: "smooth" });
    };
    return (
        <div className={styles.landingWrapper}>
            <section className={styles.sectionLeft}>
                <div>
                    <p>Up to 25% off on SPECIAL SPECIAL collection</p>
                    <button onClick={handleClick}>Shop now</button>
                </div>
            </section>
            <section className={styles.sectionRight}>
                <div>
                    <img src={landingGIF} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Landing;
