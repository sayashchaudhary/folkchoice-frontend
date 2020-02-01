import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Gradient from '../../../assets/images/gradient_carousel.png';

import Download from '../../../assets/images/download.jpg';

export interface SliderData {
    imageUrl?: string;
    caption: string;
}

export interface sliderProps {
    data: SliderData[]
}

const Slider: React.FC<sliderProps> = (props: sliderProps) => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} className="carousel__background">
            {
                props.data.map(d => {
                    return (
                        <div>
                            <img src={Download} alt="Download" className="slider__image"/>
                            <img src={Gradient} alt="Gradient" className="slider__gradient"/>
                            <p className="legend">{d.caption}</p>
                        </div>
                    )
                })
            }

        </Carousel>
    )
};


export default Slider;

