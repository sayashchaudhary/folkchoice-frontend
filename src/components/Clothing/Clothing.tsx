import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Slider, {CarouselData} from '../Shared/Carousel/Carousel';
import Footer from '../Shared/Footer/Footer';
import Gradient from '../../assets/images/gradient.png';

const dummyCarousel: CarouselData[] = [
    {caption: ''},
    {caption: ''},
    {caption: ''}
];

const Clothing: React.FC = () => {
    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="clothing">
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 clothing__spacing">
                        <div className="clothing__card">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEzDjENz1AjhT5nYUsJp4PJwVFLEzpclKLHPvHGNpKWmydb303"
                                alt="men" className="clothing__card-image"/>
                                <img src={Gradient} alt="gradient" className="clothing__card-gradient" />
                            <div className="clothing__card-text">
                                <p>MEN'S <br/>CLOTHING</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 clothing__spacing">
                        <div className="clothing__card">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDgZMRkeqJWQ0E_UF8euHcOJcdZFU6v0e5-QDK72jGMI7UPi_N"
                                alt="men" className="clothing__card-image"/>
                            <img src={Gradient} alt="gradient" className="clothing__card-gradient" />
                            <div className="clothing__card-text">
                                <p>WOMEN'S <br/>CLOTHING</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 clothing__spacing">
                        <div className="clothing__card">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBc-elmXE8KdWSPTv8JlXxiOmaI9Yww6ywW006iuycEb6iSZLB    "
                                alt="men" className="clothing__card-image"/>
                            <img src={Gradient} alt="gradient" className="clothing__card-gradient" />
                            <div className="clothing__card-text">
                                <p>KIDS <br/>CLOTHING</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 clothing__spacing">
                        <div className="clothing__card">
                            <img
                                src="https://www.buckandbuck.com/media/catalog/product/cache/ed87568b890e2f3fc93cb0ae3e77131d/3/1/31rx_2009_srgb_1_1.jpg"
                                alt="men" className="clothing__card-image"/>
                            <img src={Gradient} alt="gradient" className="clothing__card-gradient" />
                            <div className="clothing__card-text">
                                <p>SECOND <br/>INNINGS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="clothing__carousel">
                        <Slider data={dummyCarousel}/>
                    </div>
                </div>
                <div className="row">
                    <div className="clothing__text pt-2">
                        <h1>Check them Out:</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 pt-3 clothing__spacing">
                        <div className="clothing__seller">
                            <div className="clothing__seller-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVS3bRllJLwKk14gFqMN6T8fKt8DMm_trMKd6WUC16YhMRtgMx"
                                    alt="Profile Pic" className="clothing__seller-card__image"/>
                                <p className="clothing__seller-card__text"><strong>Rama Traders</strong><br/>
                                    Ethnic, Casuals, Formals</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pt-3 clothing__spacing">
                        <div className="clothing__seller">
                            <div className="clothing__seller-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVS3bRllJLwKk14gFqMN6T8fKt8DMm_trMKd6WUC16YhMRtgMx"
                                    alt="Profile Pic" className="clothing__seller-card__image"/>
                                <p className="clothing__seller-card__text"><strong>Rama Traders</strong><br/>
                                    Ethnic, Casuals, Formals</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="clothing__carousel">
                        <Slider data={dummyCarousel}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 pt-3 clothing__spacing">
                        <div className="clothing__seller">
                            <div className="clothing__seller-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVS3bRllJLwKk14gFqMN6T8fKt8DMm_trMKd6WUC16YhMRtgMx"
                                    alt="Profile Pic" className="clothing__seller-card__image"/>
                                <p className="clothing__seller-card__text"><strong>Rama Traders</strong><br/>
                                    Ethnic, Casuals, Formals</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pt-3 clothing__spacing">
                        <div className="clothing__seller">
                            <div className="clothing__seller-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVS3bRllJLwKk14gFqMN6T8fKt8DMm_trMKd6WUC16YhMRtgMx"
                                    alt="Profile Pic" className="clothing__seller-card__image"/>
                                <p className="clothing__seller-card__text"><strong>Rama Traders</strong><br/>
                                    Ethnic, Casuals, Formals</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pt-3 clothing__spacing">
                        <div className="clothing__seller">
                            <div className="clothing__seller-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVS3bRllJLwKk14gFqMN6T8fKt8DMm_trMKd6WUC16YhMRtgMx"
                                    alt="Profile Pic" className="clothing__seller-card__image"/>
                                <p className="clothing__seller-card__text"><strong>Rama Traders</strong><br/>
                                    Ethnic, Casuals, Formals</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pt-3 clothing__spacing">
                        <div className="clothing__seller">
                            <div className="clothing__seller-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVS3bRllJLwKk14gFqMN6T8fKt8DMm_trMKd6WUC16YhMRtgMx"
                                    alt="Profile Pic" className="clothing__seller-card__image"/>
                                <p className="clothing__seller-card__text"><strong>Rama Traders</strong><br/>
                                    Ethnic, Casuals, Formals</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pt-3 clothing__spacing">
                        <div className="clothing__seller">
                            <div className="clothing__seller-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVS3bRllJLwKk14gFqMN6T8fKt8DMm_trMKd6WUC16YhMRtgMx"
                                    alt="Profile Pic" className="clothing__seller-card__image"/>
                                <p className="clothing__seller-card__text"><strong>Rama Traders</strong><br/>
                                    Ethnic, Casuals, Formals</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pt-3 clothing__spacing">
                        <div className="clothing__seller">
                            <div className="clothing__seller-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVS3bRllJLwKk14gFqMN6T8fKt8DMm_trMKd6WUC16YhMRtgMx"
                                    alt="Profile Pic" className="clothing__seller-card__image"/>
                                <p className="clothing__seller-card__text"><strong>Rama Traders</strong><br/>
                                    Ethnic, Casuals, Formals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Clothing;
