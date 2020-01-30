import React from 'react';

const ProductCard: React.FC<any> = (props:any) => {
    return (
        <div className="container-fluid">
            <div className="dashboard__items">

                            <div className="dashboard__items-item__card">
                                <img src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/3/83a5d0d8901030655012_g.jpg" alt="img" className="dashboard__items-item__card-image" />
                                <h4 className="dashboard__items-item__card-name">{props.name}</h4>
                                <p className="dashboard__items-item__card-seller">{props.seller}</p>
                                <p className="dashboard__items-item__card-seller"><del> {props.Oldprice}</del><span className="dashboard__items-item__card-seller__price"> {props.Newprice}</span> </p>
                            </div>
                        </div>
                        </div>


    );
}

export default ProductCard;
