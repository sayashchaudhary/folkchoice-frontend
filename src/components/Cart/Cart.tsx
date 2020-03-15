import React from "react";
import {observer} from "mobx-react";
import {GlobalProps} from "../../App";

const Cart: React.FC<GlobalProps> = (props: GlobalProps) => {
    return (
        <div className="cart-list">
            {
                props.store!.cartStore.getEntities.map((item, index) => {
                    return (
                        <li key={index}>
                            <div>
                                <img src={item.image_url}/>
                                <p>{item.title}</p>
                                <p>{item.new_price}</p>
                            </div>
                        </li>
                    )
                })
            }
        </div>
    )
};

export default (observer(Cart));
