import React from 'react';
import Logo from '../../../assets/images/logo1.png';
import Instagram from '../../../assets/images/instagram.png';
import Facebook from '../../../assets/images/facebook1.png';
import Twitter from '../../../assets/images/twitter.png';


const Footer: React.FC = () => {
    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="row">
                    <div className="col-md-6">
                        <div className="footer__alignleft">
                            <img src={Logo} alt="Logo" className="footer__alignleft-image" />
                            <span className="footer__alignleft-text">FOLK CHOICE</span><br/>
                            <div className="footer__alignleft-detail">
                                <h4><strong>E-mail us at</strong></h4>
                                <p>abc@gmail.com</p>
                                <h4><strong>Contact us: </strong></h4>
                                <p>1234567890, 9876543210</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-right">
                        <div className="footer__alignright">
                        <div className="footer__alignright-detail">
                                <h4><strong>About us</strong></h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
                                    book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
                                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <h4><strong>FAQ'S </strong></h4>
                                <h4><strong>Help Desk </strong></h4>
                                <h4><strong>Terms and Conditions </strong></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img src={Instagram} alt="instagram" className="footer__social" /><span>folk__choice</span>
                        <img src={Facebook} alt="facebook" className="footer__social" /><span>folk__choice</span>
                        <img src={Twitter} alt="twitter" className="footer__social" /><span>folk__choice</span>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Footer;