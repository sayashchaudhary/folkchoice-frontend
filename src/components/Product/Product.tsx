import React, { useEffect } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from "../Shared/Footer/Footer";

const Product: React.FC = () => {
    function slide() {
        let u = document.getElementsByClassName("item1") as HTMLCollectionOf<HTMLElement>;
        let x = document.getElementsByClassName("item2") as HTMLCollectionOf<HTMLElement>;
        let y = document.getElementsByClassName("item3") as HTMLCollectionOf<HTMLElement>;
        let z = document.getElementsByClassName("item4") as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            y[i].style.display = "none";
            z[i].style.display = "none";
            u[i].style.display = "block";
        }
    }

    function slide1() {
        let u = document.getElementsByClassName("item2") as HTMLCollectionOf<HTMLElement>;
        let x = document.getElementsByClassName("item1") as HTMLCollectionOf<HTMLElement>;
        let y = document.getElementsByClassName("item3") as HTMLCollectionOf<HTMLElement>;
        let z = document.getElementsByClassName("item4") as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            y[i].style.display = "none";
            z[i].style.display = "none";
            u[i].style.display = "block";
        }
    }

    function slide2() {
        let u = document.getElementsByClassName("item3") as HTMLCollectionOf<HTMLElement>;
        let x = document.getElementsByClassName("item1") as HTMLCollectionOf<HTMLElement>;
        let y = document.getElementsByClassName("item2") as HTMLCollectionOf<HTMLElement>;
        let z = document.getElementsByClassName("item4") as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            y[i].style.display = "none";
            z[i].style.display = "none";
            u[i].style.display = "block";
        }
    }

    function slide3() {
        let u = document.getElementsByClassName("item4") as HTMLCollectionOf<HTMLElement>;
        let x = document.getElementsByClassName("item1") as HTMLCollectionOf<HTMLElement>;
        let y = document.getElementsByClassName("item3") as HTMLCollectionOf<HTMLElement>;
        let z = document.getElementsByClassName("item2") as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            y[i].style.display = "none";
            z[i].style.display = "none";
            u[i].style.display = "block";
        }
    }

    function display() {
        let u = document.getElementsByClassName("address_btn") as HTMLCollectionOf<HTMLElement>;
        let v = document.getElementsByClassName("address") as HTMLCollectionOf<HTMLElement>;
        for(let i=0;i<u.length;i++){
            v[i].style.display = 'block';
        }
    }

    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="description">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4 col-6">
                                    <div className="row">
                                        <div className="col-md-12 img2">
                                            <img alt="girl"
                                                 src="https://images-na.ssl-images-amazon.com/images/I/71ivJqXSWVL._AC_UX679_.jpg"
                                                 className="description__img" onClick={() => slide()}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 img1">
                                            <img alt="girl"
                                                 src="https://www.jyotisehgalvig.com/wp-content/uploads/2019/05/haircare.png"
                                                 className="description__img" onClick={() => slide1()}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 img3">
                                            <img alt="girl"
                                                 src="https://cdn2.stylecraze.com/wp-content/uploads/2012/02/Care-For-Your-Lips-1.jpg"
                                                 className="description__img" onClick={() => slide2()}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 img4">
                                            <img alt="girl"
                                                 src="https://previews.123rf.com/images/subbotina/subbotina1802/subbotina180200077/96466627-aloe-vera-closeup-sliced-aloevera-natural-organic-renewal-cosmetics-alternative-medicine-organic-ski.jpg"
                                                 className="description__img" onClick={() => slide3()}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-6">
                                    <div className="images">
                                        <img alt="girl"
                                             src="https://previews.123rf.com/images/subbotina/subbotina1802/subbotina180200077/96466627-aloe-vera-closeup-sliced-aloevera-natural-organic-renewal-cosmetics-alternative-medicine-organic-ski.jpg"
                                             className="item4"/>
                                        <img alt="girl"
                                             src="https://cdn2.stylecraze.com/wp-content/uploads/2012/02/Care-For-Your-Lips-1.jpg"
                                             className="item3"/>
                                        <img alt="girl"
                                             src="https://images-na.ssl-images-amazon.com/images/I/71ivJqXSWVL._AC_UX679_.jpg"
                                             className="item1"/>
                                        <img alt="girl"
                                             src="https://www.jyotisehgalvig.com/wp-content/uploads/2019/05/haircare.png"
                                             className="item2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-11 description__offers">
                                    <p><b>BEST OFFERS</b><br/> Best Price: Rs. 494
                                        Applicable on: Orders above Rs. 999 Coupon
                                        code:
                                        SUPER10 Expires in: 4 hours 58 minutes Max Discount: 100% of MRP (Your total
                                        saving: Rs. 505) </p><br/>

                                        <button className="address_btn" onClick={()=>{display()}}>Sold by:</button><br/>  <p className="address">Manufacturer/Packer/Importer Details Prateek Apparels
                                        Pvt Ltd, #113 Krishna Reddy Indl Area,7th Mile,Kudlu Gate,Hosur
                                        Road,Banglore 560068-INDIA<br/><br/><b> Country of origin</b><br/></p>
                                    <h4> India </h4>
                                </div>
                                <div className="col-md-1"> </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="description__product">
                                <h2>Women Chikan Embroidery Poly Georgette Straight Kurta (Green) </h2>
                                <br/>
                                <h2>1271$</h2><br/>
                                <p><b>SOLD BY:</b> RAMA TRADERS</p><br/>
                                <p><b>SIZE:</b></p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <button type="submit" className="order__size">XS</button>
                                        <button type="submit" className="order__size">S</button>
                                        <button type="submit" className="order__size">M</button>
                                        <button type="submit" className="order__size">L</button>
                                        <button type="submit" className="order__size">XL</button>
                                        <button type="submit" className="order__size">XXL</button>
                                        <p className="quantity"><b>QUANTITY</b></p>
                                        <button type="submit" className="order__add">-</button>
                                        <button type="submit" className="order__quantity">1</button>
                                        <button type="submit" className="order__add">+</button>
                                    </div>
                                    <br/>
                                </div>
                                <div className="row">
                                    <button type="submit" className="description__cart">Add to Cart</button>
                                    <button type="submit" className="description__cart">Buy now</button>
                                </div>
                                <div className="row">
                                    <div className="col-md-8">
                                        <h3>PRODUCT DESCRIPTION</h3>
                                        <p>orem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem
                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                            an
                                            unknown printer took a galley of type and scrambled it to make a type
                                            specimen
                                            book. It has survived not only five centuries, but also the leap into
                                            electronic
                                            typesetting, remaining essentially unchanged. It <br/><br/><b>Size &
                                                Fit</b><br/> Slim fit The model
                                            (height 6') is wearing a size 40 <br/><br/><b>Material &
                                                Care</b><br/> Cotton<br/> Machine-wash</p>
                                    </div>
                                </div>
                                <div className="row pt-5">
                                    <div className="col-md-6">
                                        <li> 100% Original Products</li>
                                        <li> Free Delivery on order above Rs. 1199</li>
                                        <li> Cash on delivery might be available</li>
                                        <li> Easy 30 days returns and exchanges</li>
                                        <li> Try & Buy might be available</li>
                                        <li> Product Code: 2192703</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <Footer/>
            </div>
        </div>
    )
};

export default Product;
