import React, { useEffect } from 'react';
import Tiles, { TilesProps } from "../Shared/Tiles/Tiles";
import Slider, { SliderData } from "../Shared/Carousel/Carousel"
import Market, { MarketProps } from "../Shared/Market/Market";
import Navbar from '../Shared/Navbar/Navbar';
import Footer from "../Shared/Footer/Footer";
import { RoutePath } from "../../routing/routes";
import { GlobalProps } from "../../App";
import { marketController } from "../../controllers/market.controller";
import { inject, observer } from "mobx-react";

const genderTiles: TilesProps[] = [
    {
        text: 'HIM',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPhy64NekYcxLFgv26oqXQE99uCCqj02Ek8KyqoTTnHq41fehT',
        link: RoutePath.products
    },
    {
        text: 'HER',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUHHVpDgnLxLMRC15Tw84cDfA7meuahwyXoJepq0XkhBJbMgSE',
        link: RoutePath.products
    },
];

const dummySlider: SliderData[] = [
    {caption: ''},
    {caption: ''},
    {caption: ''},
];

const ageTiles: TilesProps[] = [
    {
        text: 'INFANTS',
        imageUrl: 'https://www.treatedwell.com/wp-content/uploads/sites/12/2016/03/baby-crawling.jpg',
        link: RoutePath.products
    },
    {
        text: '6-12 MONTHS',
        imageUrl: 'https://rukminim1.flixcart.com/image/832/832/jfyaf0w0/poster/w/a/7/small-happy-baby-for-play-nps000000695-original-imaf4arg3zuj3prn.jpeg?q=70',
        link: RoutePath.products
    },
    {
        text: '12-24 MONTHS',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT94rnMZMjR0q08Ge94-dT8emVXST-qXp2LBi_8JmpRAlVnI5I-',
        link: RoutePath.products
    },
    {
        text: '2-3 YEARS',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ40q5jEzZt0OK_klpx955hKbRNkUyKsYoddinaQU1f2KTYojER',
        link: RoutePath.products
    }
];

const categoryTiles: TilesProps[] = [
    {
        text: 'CASUALS',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRb4XMisCsJwXPkuglPKW4m-DcSNUmOhfiQ5_WFJQyLCCZ7dMT1',
        link: RoutePath.products
    },
    {
        text: 'ETHNIC',
        imageUrl: 'https://cdn.shopify.com/s/files/1/2283/0119/products/1_d5a0e6db-4f8f-42f2-a620-d8fec9e6ac12_1024x1024@2x.jpg?v=1571610306',
        link: RoutePath.products
    },
    {
        text: 'PARTYWEAR',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTsb4oNVF5E5iUfr-C5qTAmtt51rCOYt8enkpFvZuFqKW-Z3jr',
        link: RoutePath.products
    }
];

const Kids: React.FC<GlobalProps> = (props: GlobalProps) => {
    function viewMarket() {
        marketController.getAllMarket();
        console.log("Market", props.store!.marketStore.getEntities);
    }

    useEffect(() => {
        viewMarket();
    }, []);

    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="row kids">
                {
                    genderTiles.map(t => {
                        return (
                            <div className="col-md-6 kids__spacing">
                                <Tiles link={t.link} imageUrl={t.imageUrl} text={t.text}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row">
                <Slider data={dummySlider}/>
            </div>
            <div className="row">
                {
                    ageTiles.map(t => {
                        return (
                            <div className="col-6 col-sm-6 col-md-4 col-lg-3 kids__spacing">
                                <Tiles link={t.link} imageUrl={t.imageUrl} text={t.text}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row">
                <Slider data={dummySlider}/>
            </div>
            <div className="row">
                {
                    categoryTiles.map(t => {
                        return (
                            <div className="col-6 col-sm-6 col-md-4 kids__spacing">
                                <Tiles link={t.link} imageUrl={t.imageUrl} text={t.text}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row">
                {
                    props.store!.marketStore.getEntities.map((p, index) => {
                        return (
                            <div className="col-md-6 pt-3 clothing__spacing">
                                <Market shop={p.user.name} category={p.description} rating={p.rating}/>
                            </div>
                        )
                    })
                }
            </div>
            <Footer/>
        </div>
    )
};

export default inject('store')(observer(Kids));
