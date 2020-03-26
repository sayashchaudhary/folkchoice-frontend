import React, { useState } from "react";
import { observer } from "mobx-react";
import { GlobalProps } from "../../App";
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Cart: React.FC<GlobalProps> = (props: GlobalProps) => {
    let [count, setCount] = useState(0);
    if (count < 0) {
        setCount(count = 0)
    }
    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="container checkout">
                <div className="row">
                    <div className="col-md-4">
                        <h4>DELIVERY ADDRESS :</h4>
                    </div>
                    <div className="col-md-8">
                        <p>dfsdudifhsifdodnjnijnufhh</p>
                    </div>
                </div>
            </div>
            <div className="container order">
                <div className="row">
                    <div className="col-md-4">
                        <img alt="girl"
                             src="https://images-na.ssl-images-amazon.com/images/I/71ivJqXSWVL._AC_UX679_.jpg"
                             className="order__img"/>
                    </div>
                    <div className="col-md-8 spacing">
                        <h3>Women Chikan Embroidery Poly Georgette Straight Kurta (Green) </h3>
                        <br/>
                        <p><b>SOLD BY:</b> RAMA TRADERS</p>
                        <p><b>SIZE:</b></p>
                        <button type="submit" className="order__size">XS</button>
                        <button type="submit" className="order__size">S</button>
                        <button type="submit" className="order__size">M</button>
                        <button type="submit" className="order__size">L</button>
                        <button type="submit" className="order__size">XL</button>
                        <button type="submit" className="order__size">XXL</button>
                        <p className="quantity"><b>QUANTITY</b></p>
                        <button type="submit" className="order__add" onClick={() => {
                            setCount(count - 1)
                        }}>-
                        </button>
                        <button type="submit" className="order__quantity">{count}</button>
                        <button type="submit" className="order__add" onClick={() => {
                            setCount(count + 1)
                        }}>+
                        </button>
                    </div>
                </div>
            </div>
            <div className="container price">
                <div className="row">
                    <div className="col-12">
                        <h6>Offer/Promocode Applied or Applicable</h6>
                    </div>
                    <div className="col-md-12">
                        <div className="left">
                            <p>Price:</p>
                            <p>Discount:</p>
                            <p>Savings:</p>
                            <p>Taxes:</p>
                            <p>Total:</p>
                            <br/>
                            <p>Coupon:</p>
                        </div>
                        <div className="right">
                            <p>1499$</p>
                            <p>-240$</p>
                            <p>350$</p>
                            <p>12$</p>
                            <h4>1271$</h4>
                            <br/>
                            <p>QWERTY -20% OFF ON CLOTHING</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <h6>Have A Promocode?</h6><br/>
                        <h6>Buying For Someone Else?</h6>
                    </div>
                </div>
            </div>
            <div className="container checkout1">
                <div className="row">
                    <div className="col-md-8">
                        <h4>TOTAL AMOUNT TO BE PAID:<b>1271$</b></h4>
                    </div>
                    <div className="col-md-4">
                        <button type="submit" className="order">PLACE ORDER</button>
                    </div>
                </div>
            </div>
            < Footer/>

            {/*<div className="cart-list">*/}
            {/*    {*/}
            {/*        props.store!.cartStore.getEntities.map((item, index) => {*/}
            {/*            return (*/}
            {/*                <li key={index}>*/}
            {/*                    <div>*/}
            {/*                        <img src={item.image_url}/>*/}
            {/*                        <p>{item.title}</p>*/}
            {/*                        <p>{item.new_price}</p>*/}
            {/*                    </div>*/}
            {/*                </li>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
        </div>
    )
};

export default (observer(Cart));
