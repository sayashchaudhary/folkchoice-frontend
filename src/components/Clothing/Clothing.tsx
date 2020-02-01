import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Slider, {CarouselData} from '../Shared/Carousel/Carousel';
import Footer from '../Shared/Footer/Footer';
import Tiles, {TilesProps} from "../Shared/Tiles/Tiles";

const dummyTiles: TilesProps[] = [
    {text: 'Men clothing'},
    {text: 'Men clothing'},
    {text: 'Men clothing'},
    {text: 'Men clothing'},
];

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
                    {
                        dummyTiles.map(t => {
                            return (
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3 clothing__spacing">
                                    <Tiles text={t.text}/>
                                </div>
                            )
                        })
                    }
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
