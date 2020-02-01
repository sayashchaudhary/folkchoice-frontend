import React from 'react';
import Gradient from "../../../assets/images/gradient.png";

export interface TilesProps {
    imageUrl: string;
    text: string
}

const Tiles: React.FC<TilesProps> = (props: TilesProps) => {
    return (

        <div className="tiles">

            <div className="tiles__card">
                <img src={props.imageUrl} alt="men" className="tiles__card-image"/>
                <img src={Gradient} alt="gradient" className="tiles__card-gradient"/>
                <div className="tiles__card-text">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>

    )
};

export default Tiles;
