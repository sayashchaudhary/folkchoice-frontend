import React from 'react';

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
                <p className="market__card-text">
                    <strong>{props.shop}</strong><br/> {props.category}</p>
            </div>
        </div>
    )
};

export default Market;
