import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Showcase.module.scss";
import { useState, useEffect } from "react";
import { getAllShoes } from "../../services/shoes";
import ShowcaseItem from "./ShowcaseItem/ShowcaseItem";
import "./CarouselArrows.css";

const CarouselPage = () => {
    const [shoes, setShoes] = useState(null);
    useEffect(() => {
        const wrapper = async () => {
            const allShoes = await getAllShoes();
            setShoes(allShoes);
        };
        wrapper();
    }, []);

    const favShoes = [];
    shoes &&
        shoes.map((shoe) => {
            if (shoe.fav === true) {
                favShoes.push(shoe);
            }
            console.log(favShoes, "FAV SHOES");
        });

    return (
        <div className={styles.showcaseContainer}>
            <div>
                <Carousel
                    autoPlay={true}
                    infiniteLoop
                    showThumbs={false}
                    showArrows={true}
                    swipeable
                >
                    {favShoes &&
                        favShoes.map((shoe) => {
                            return (
                                <ShowcaseItem
                                    key={shoe.id}
                                    name={shoe.name}
                                    price={shoe.price}
                                    img={shoe.img}
                                />
                            );
                        })}
                </Carousel>
            </div>
        </div>
    );
};

export default CarouselPage;
