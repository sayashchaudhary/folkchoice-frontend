import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import Download from '../../assets/images/download.jpg';

const Slider: React.FC = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true}>
            <div>
                <img src={Download} alt="Download" className="slider__image"/>
                <p className="legend">Best Deals On <br />Clothing</p>
            </div>
            <div>
                <img src={Download} alt="heart" className="slider__image"/>
                <p className="legend">Best Deals on <br />Cosmetics</p>
            </div>
            <div>
                <img src={Download} alt="heart" className="slider__image"/>
                <p className="legend">Folk Choice<br /> Exclusive</p>
            </div>
        </Carousel>
    )
};


export default Slider;
