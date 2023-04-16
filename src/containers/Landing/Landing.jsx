import React from "react";
import styles from "./Landing.module.scss";

const Landing = () => {
    return (
        <div className={styles.landingWrapper}>
            <section className={styles.sectionLeft}>
                <div>
                    <p>Up to 25% off on SPECIAL SPECIAL collection</p>
                    <button>Shop now</button>
                </div>
            </section>
            <section className={styles.sectionRight}>
                <div>
                    <img src="http://placekitten.com/200/200" alt="" />
                </div>
            </section>
        </div>
    );
};

export default Landing;
