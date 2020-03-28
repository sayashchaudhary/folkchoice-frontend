import React from "react";
import { inject, observer } from "mobx-react";
import { GlobalProps } from "../../App";
import ProductCard from "../Shared/ProductCard/ProductCard";

const Cart: React.FC<GlobalProps> = (props: GlobalProps) => {
    return (
        <div className="dashboard__items-item">
            <div className="row">
                {
                    props.store!.cartStore.getEntities.map((item, index) => {
                        return (
                            <div key={index}
                                 className="col-6 col-sm-6 col-md-4 col-lg-2 dashboard__items-item__spacing">
                                <ProductCard
                                    name={item.description}
                                    seller='Seller'
                                    newPrice={item.new_price}
                                    oldPrice={0}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default inject('store')(observer(Cart));
