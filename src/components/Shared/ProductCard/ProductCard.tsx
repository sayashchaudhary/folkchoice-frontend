import React from 'react';
import { RoutePath } from "../../../routing/routes";
import { useHistory } from "react-router";
import { RouteUtils } from "../../../routing/route-utils";

export interface ProductCardProps {
    imageUrl?: string;
    name: string;
    seller: string;
    oldPrice: number;
    newPrice: number;
}

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
    const history = useHistory();
    const navigateToRoute = (route: RoutePath) => {
        if (route) {
            history.push(RouteUtils.getUrl(route, null));
        }
    };
    return (
        <div className="product-card">
            <img
                src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/6/1f5471ec-c783-4fa7-99f4-2b6f6fb251761580946317672-1.jpg"
                alt="img" className="product-card-image" onClick={() => navigateToRoute(RoutePath.description)}/>
            <h4 className="product-card-name">{props.name}</h4>
            <p className="product-card-seller">{props.seller}</p>
            <p className="product-card-prices text-right">
                <del> ₹{props.oldPrice}</del>
                <span className="product-card-seller__price"> ₹{props.newPrice}</span></p>
        </div>
    );
};

export default ProductCard;
