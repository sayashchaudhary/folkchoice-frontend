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
                src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/3/83a5d0d8901030655012_g.jpg"
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
