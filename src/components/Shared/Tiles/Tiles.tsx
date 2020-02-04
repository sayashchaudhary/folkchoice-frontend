import React from 'react';
import Gradient from "../../../assets/images/gradient.png";
import { RoutePath } from "../../../routing/routes";
import { useHistory } from "react-router";
import { RouteUtils } from "../../../routing/route-utils";

export interface TilesProps {
    imageUrl: string;
    text: string;
    link?: RoutePath
}

const Tiles: React.FC<TilesProps> = (props: TilesProps) => {
    const history = useHistory();
    const navigateToRoute = (route: RoutePath) => {
        if (route) {
            history.push(RouteUtils.getUrl(route, null));
        }
    };
    return (
        <div className="tiles">
            <div className="tiles__card" onClick={() => navigateToRoute(props.link!)}>
                <img src={props.imageUrl} alt="men" className="tiles__card-image"/>
                <img src={Gradient} alt="gradient" className="tiles__card-gradient"/>
                <div className="tiles__card-text">
                    <span className="tiles__card-text">{props.text}</span>
                </div>
            </div>
        </div>
    )
};

export default Tiles;
