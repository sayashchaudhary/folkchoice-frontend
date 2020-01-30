import React from 'react';

const ProductCard: React.FC<any> = (props: any) => {
    return (
        <div className="product-card">
            <img
                src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/3/83a5d0d8901030655012_g.jpg"
                alt="img" className="product-card-image"/>
            <h4 className="product-card-name">{props.Name}</h4>
            <p className="product-card-seller">{props.Seller}</p>
            <p className="product-card-seller">
                <del> {props.Oldprice}</del>
                <span className="product-card-seller__price"> {props.Newprice}</span></p>
        </div>
    );
};

export default ProductCard;
