'use client'
import styles from './Banner.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
export default function Banner() {
    const smallScreen = useScreenSize();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className={styles.banner}>
            <Slider {...settings}>
                <div className={styles.banner_divs}>
                    <img src={`/imagens/banners/${smallScreen ? "celphone":"desktop"}/banner1.png`} alt="banner1" />
                </div>
                <div>
                    <img src={`/imagens/banners/${smallScreen ? "celphone":"desktop"}/banner2.png`} alt="banner2" />
                </div>
            </Slider>
        </div>
    );
};