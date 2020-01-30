import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Dashboard: React.FC = () => {
    return (
        <div className="container-fluid">
            <div className="dashboard">
                <div className="dashboard__items">
                    <div className="dashboard__items-text">
                        <h4>Today, we present you:</h4><br/>
                        <h2><strong>Steal on Cosmetics</strong></h2>
                    </div>
                    <div className="dashboard__items-item">
                        <div className="row">
                            <div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
                                <ProductCard
                                    name="Lakme 9 to 5 CC - Honey"
                                    Seller="Seller - Lalita Sales"
                                    Oldprice="₹521"
                                    Newprice="₹349"
                                />
                            </div>

                            <div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
                                <ProductCard
                                    name="Lakme 9 to 5 CC - Honey"
                                    Seller="Seller - Lalita Sales"
                                    Oldprice="₹521"
                                    Newprice="₹349"
                                />
                            </div>

                            <div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
                                <ProductCard
                                    name="Lakme 9 to 5 CC - Honey"
                                    Seller="Seller - Lalita Sales"
                                    Oldprice="₹521"
                                    Newprice="₹349"
                                />
                            </div>

                            <div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
                                <ProductCard
                                    name="Lakme 9 to 5 CC - Honey"
                                    Seller="Seller - Lalita Sales"
                                    Oldprice="₹521"
                                    Newprice="₹349"
                                />
                            </div>

                            <div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
                                <ProductCard
                                    name="Lakme 9 to 5 CC - Honey"
                                    Seller="Seller - Lalita Sales"
                                    Oldprice="₹521"
                                    Newprice="₹349"
                                />
                            </div>

                            <div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
                                <ProductCard
                                    name="Lakme 9 to 5 CC - Honey"
                                    Seller="Seller - Lalita Sales"
                                    Oldprice="₹521"
                                    Newprice="₹349"
                                />
                            </div></div>

                </div>
                <div className="dashboard__items">
                    <div className="dashboard__items-text">
                        <h2><strong>Crazy Deals on Clothing</strong></h2>
                    </div>
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
                            <ProductCard
                                name="Lakme 9 to 5 CC - Honey"
                                Seller="Seller - Lalita Sales"
                                Oldprice="₹521"
                                Newprice="₹349"
                            />
                        </div>

                        <div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
                            <ProductCard
                                product-image="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/3/83a5d0d8901030655012_g.jpg"
                                product-name="Lakme 9 to 5 CC - Honey"
                                product-seller="Seller - Lalita Sales"
                                product-old-price="₹521"
                                product-new-price="₹349"
                            />
                        </div>

                        <div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
                            <ProductCard
                                name="Lakme 9 to 5 CC - Honey"
                                Seller="Seller - Lalita Sales"
                                Oldprice="₹521"
                                Newprice="₹349"
                            />
                        </div>

                        <div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
                            <ProductCard
                                name="Lakme 9 to 5 CC - Honey"
                                Seller="Seller - Lalita Sales"
                                Oldprice="₹521"
                                Newprice="₹349"
                            />
                        </div>

                        <div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
                            <ProductCard
                                name="Lakme 9 to 5 CC - Honey"
                                Seller="Seller - Lalita Sales"
                                Oldprice="₹521"
                                Newprice="₹349"
                            />
                        </div>

                        <div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
                            <ProductCard
                                name="Lakme 9 to 5 CC - Honey"
                                Seller="Seller - Lalita Sales"
                                Oldprice="₹521"
                                Newprice="₹349"
                            />
                        </div></div>
                </div>
            </div>
            </div></div>
    );
};

export default Dashboard;
