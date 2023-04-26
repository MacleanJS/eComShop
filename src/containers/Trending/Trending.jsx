import React, { useEffect, useState } from "react";
import styles from "./Trending.module.scss";
import Reviews from "../../components/Reviews/Reviews";
import Carousel from "../../components/Showcase/Showcase";
import CarouselPage from "../../components/Showcase/Showcase";
import { getAllShoes } from "../../services/shoes";

const Trending = ({ shoes }) => {
    const [reviews, setReviews] = useState(null);
    useEffect(() => {
        const wrapper = async () => {
            const allShoes = await getAllShoes();
            setReviews(allShoes);
        };
        wrapper();
    }, []);

    // console.log(reviews[1].img, "AAAAABBBBBBBBBBBBCVCC");
    return (
        <div className={styles.trendingWrapper}>
            <div className={styles.reviewWrapper}>
                <Reviews
                    img={reviews?.[7]?.img}
                    text={"Great shoe, perfect condition!"}
                    rating={"4.5/5"}
                />
                <Reviews
                    img={reviews?.[0]?.img}
                    text={"Fast delivery."}
                    rating={"5/5"}
                />
                <Reviews
                    img={reviews?.[1]?.img}
                    text={"Perfect fit, would recommend!"}
                    rating={"5/5"}
                />
                <Reviews
                    img={reviews?.[2]?.img}
                    text={"So comfortable..."}
                    rating={"5/5"}
                />
            </div>
            <h1 className={styles.trendingHeader}>Trending now</h1>
            <CarouselPage shoes={shoes} />
        </div>
    );
};

export default Trending;
