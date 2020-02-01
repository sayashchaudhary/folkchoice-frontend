import React from 'react';
import Gradient from "../../../assets/images/gradient.png";

export interface TilesProps {
    imageUrl?: string;
    caption: string
}

const Tiles: React.FC<TilesProps> = (props: TilesProps) => {
    return (

        <div className="tiles">

            <div className="tiles__card">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEzDjENz1AjhT5nYUsJp4PJwVFLEzpclKLHPvHGNpKWmydb303"
                    alt="men" className="tiles__card-image"/>
                <img src={Gradient} alt="gradient" className="tiles__card-gradient"/>
                <div className="tiles__card-text">
                    <p>{props.caption}</p>
                </div>
            </div>
        </div>

    )
};

export default Tiles;
