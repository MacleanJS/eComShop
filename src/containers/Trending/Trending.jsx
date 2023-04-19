import React from "react";
import styles from "./Trending.module.scss";
import Reviews from "../../components/Reviews/Reviews";
import Carousel from "../../components/Showcase/Showcase";
import CarouselPage from "../../components/Showcase/Showcase";

const Trending = () => {
    return (
        <div className={styles.trendingWrapper}>
            <div className={styles.reviewWrapper}>
                <Reviews
                    img={"https://placekitten.com/150/150"}
                    text={"Fake review 1"}
                    rating={"*****"}
                />
                <Reviews
                    img={"https://placekitten.com/150/150"}
                    text={
                        "Fake reviewaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaa 2"
                    }
                    rating={"*****"}
                />
                <Reviews
                    img={"https://placekitten.com/150/150"}
                    text={"Fake review 3"}
                    rating={"*****"}
                />
                <Reviews
                    img={"https://placekitten.com/150/150"}
                    text={"Fake review 4"}
                    rating={"*****"}
                />
            </div>
            <h1 className={styles.trendingHeader}>Trending now</h1>
            <CarouselPage />
        </div>
    );
};

export default Trending;
