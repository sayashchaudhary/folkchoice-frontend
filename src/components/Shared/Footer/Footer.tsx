import React from 'react';
import Logo from '../../../assets/images/logo.jpg';
import Instagram from '../../../assets/images/instagram.png';
import Facebook from '../../../assets/images/facebook1.png';
import Twitter from '../../../assets/images/twitter.png';
import Heart from '../../../assets/images/heartfill.png';


const Footer: React.FC = () => {
    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="row">
                    <div className="col-md-6">
                        <div className="footer__alignleft">
                            <img src={Logo} alt="Logo" className="footer__alignleft-image"/>
                            <span className="footer__alignleft-text">FOLK CHOICE</span><br/>
                            <div className="footer__alignleft-detail">
                                <h4><strong>E-mail us at</strong></h4>
                                <p>abc@gmail.com</p>
                                <h4><strong>Contact us: </strong>
                                    <span>1234567890, 9876543210</span></h4>
                                <h4>
                                    We Care
                                    <img src={Heart} alt="heart" className="footer__alignleft-detail__heart"/>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-right">
                        <div className="footer__alignright">
                            <div className="footer__alignright-detail">
                                <h4><strong>About us</strong></h4>
                                <h4><strong>FAQ'S </strong></h4>
                                <h4><strong>Help Desk </strong></h4>
                                <h4><strong>Privacy Policies </strong></h4>
                                <h4><strong>Terms and Conditions </strong></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center pb-3">
                        <div className="footer__social">
                            <span className="fab fa-instagram"/>
                        </div>
                        <span className="footer__text">folk__choice</span>
                        <div className="footer__social">
                            <span className="fab fa-facebook"/>
                        </div>
                        <span className="footer__text">folk__choice</span>
                        <div className="footer__social">
                            <span className="fab fa-twitter"/>
                        </div>
                        <span className="footer__text">folk__choice</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;
