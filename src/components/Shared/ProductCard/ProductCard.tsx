import React from 'react';

export interface ProductCardProps {
    imageUrl?: string;
    name: string;
    seller: string;
    oldPrice: number;
    newPrice: number
}

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
    return (
        <div className="product-card">
            <img
                src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/3/83a5d0d8901030655012_g.jpg"
                alt="img" className="product-card-image"/>
            <h4 className="product-card-name">{props.name}</h4>
            <p className="product-card-seller">{props.seller}</p>
            <p className="product-card-prices text-right">
                <del> ₹{props.oldPrice}</del>
                <span className="product-card-seller__price"> ₹{props.newPrice}</span></p>
        </div>
    );
};

export default ProductCard;
