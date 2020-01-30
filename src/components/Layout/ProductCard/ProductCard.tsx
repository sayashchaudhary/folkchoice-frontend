import React from 'react';

const ProductCard: React.FC = (props) => {
    return (
        <div className="container-fluid">
            <div className="dashboard__items">

                            <div className="dashboard__items-item__card">
                                <img src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/3/83a5d0d8901030655012_g.jpg" alt="img" className="dashboard__items-item__card-image" />
                                <h4 className="dashboard__items-item__card-name">Lakme 9 to 5 CC - Honey</h4>
                                <p className="dashboard__items-item__card-seller">Seller - Lalita Sales</p>
                                <p className="dashboard__items-item__card-seller"><del> ₹521</del><span className="dashboard__items-item__card-seller__price"> ₹349</span> </p>
                            </div>
                        </div>
                        </div>


    );
}

export default ProductCard;
