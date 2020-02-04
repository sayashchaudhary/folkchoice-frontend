import React from 'react';
import Star from '../../../assets/images/star.png';

export interface MarketProps {
    imageUrl?: string;
    shop: string;
    category: string;
    id: number
}

const Market: React.FC<MarketProps> = (props: MarketProps) => {
    return (
        <div className="market">
            <div className="market__card">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVS3bRllJLwKk14gFqMN6T8fKt8DMm_trMKd6WUC16YhMRtgMx"
                    alt="Profile Pic" className="market__card-image"/>
                <p className="market__card-text"><strong>{props.shop}</strong><br/> {props.category}</p>
                <img src={Star} alt="star" className="market__card-star"/><span
                className="market__card-rating">3.1/5</span>
            </div>
        </div>
    )
};

export default Market;
