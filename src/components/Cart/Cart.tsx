import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Cosmetics: React.FC = () => {
    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="container cart">
                <div className="row">
                    <div className="col-md-4">
                        <h4>DELIVERY ADDRESS :</h4>
                    </div>
                    <div className="col-md-8">
                        <p>dfsdudifhsifdodnjnijdnunununhujnounufhh</p>
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
                    <div className="col-md-8">
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
                        <p><b>QUANTITY</b></p>
                        <button type="submit" className="order__add">-</button>
                        <button type="submit" className="order__quantity">1</button>
                        <button type="submit" className="order__add">+</button>
                    </div>
                </div>
            </div>
            <div className="container price">
                <div className="row">
                    <div className="col-12">
                        <h6>Offer/Promocode Applied or Applicable</h6>
                    </div>
                    <div className="col-md-6">
                        <p>Price Details :</p>
                        <p>Discount :</p>
                        <p>Savings :</p>
                        <p>Taxes :</p>
                        <p>Amount Payable :</p>
                        <br/>
                        <p>Coupon Code :</p>
                    </div>
                    <div className="col-md-6 right">
                        <p>1499$</p>
                        <p>-240$</p>
                        <p>350$</p>
                        <p>12$</p>
                        <h4>1271$</h4>
                        <br/>
                        <p>QWERTY -20% OFF ON CLOTHING</p>
                    </div>
                    <div className="col-12">
                        <h6>Have A Promocode?</h6>
                        <h6>Buying For Someone Else?</h6>
                    </div>
                </div>
            </div>
            <div className="container cart">
                <div className="row">
                    <div className="col-md-8">
                        <h4>TOTAL AMOUNT TO BE PAID:<b>1271$</b></h4>
                    </div>
                    <div className="col-md-4">
                        <button type="submit" className="cart__button">PLACE ORDER </button>
                    </div>
                </div>
            </div>
            < Footer/>
        </div>
    )
};

export default Cosmetics;
