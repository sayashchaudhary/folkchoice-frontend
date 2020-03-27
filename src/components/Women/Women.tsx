import React, { useEffect } from 'react';
import Tiles, { TilesProps } from "../Shared/Tiles/Tiles";
import Market, { MarketProps } from "../Shared/Market/Market";
import Navbar from "../Shared/Navbar/Navbar";
import Slider, { SliderData } from '../Shared/Carousel/Carousel';
import Footer from "../Shared/Footer/Footer";
import { RoutePath } from "../../routing/routes";
import { inject, observer } from "mobx-react";
import { GlobalProps } from "../../App";
import { marketController } from "../../controllers/market.controller";

const dummyTiles: TilesProps[] = [
    {
        text: 'CASUAL',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEzDjENz1AjhT5nYUsJp4PJwVFLEzpclKLHPvHGNpKWmydb303',
        link: RoutePath.products
    },
    {
        text: 'FORMALS',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEzDjENz1AjhT5nYUsJp4PJwVFLEzpclKLHPvHGNpKWmydb303',
        link: RoutePath.products
    },
    {
        text: 'ETHNIC',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEzDjENz1AjhT5nYUsJp4PJwVFLEzpclKLHPvHGNpKWmydb303',
        link: RoutePath.products
    },
    {
        text: 'SPORTS',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEzDjENz1AjhT5nYUsJp4PJwVFLEzpclKLHPvHGNpKWmydb303',
        link: RoutePath.products
    },
    {
        text: 'GULABBO',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEzDjENz1AjhT5nYUsJp4PJwVFLEzpclKLHPvHGNpKWmydb303',
        link: RoutePath.products
    }
];

const dummySlider: SliderData[] = [
    {caption: ''},
    {caption: ''},
    {caption: ''}
];

const Women: React.FC<GlobalProps> = (props: GlobalProps) => {
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
            <div className="row women">
                {
                    dummyTiles.map(t => {
                        return (
                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2 col-lg-offset-1 women__spacing">
                                <Tiles imageUrl={t.imageUrl} text={t.text} link={t.link}/>
                            </div>
                        );
                    })
                }
            </div>
            <div className="row">
                <div>
                    <Slider data={dummySlider}/>
                </div>
            </div>
            <div className="row">
                {
                    props.store!.marketStore.getEntities.map((p, index) => {
                        return (
                            p.id <= 4 ?
                                <div className="col-md-6 pt-3 clothing__spacing">
                                    <Market shop={p.user.name} category={p.description} rating={p.rating}/>
                                </div>
                                :
                                null
                        )

                    })
                }
            </div>
            <div className="row">
                <div>
                    <Slider data={dummySlider}/>
                </div>
            </div>
            <div className="row">
                {
                    props.store!.marketStore.getEntities.map((p, index) => {
                        return (
                            p.id <= 4 ?
                                <div className="col-md-6 pt-3 clothing__spacing">
                                    <Market shop={p.user.name} category={p.description} rating={p.rating}/>
                                </div>
                                :
                                null
                        )

                    })
                }
            </div>
            <div className="row">
                <Footer/>
            </div>
        </div>
    );
};

export default inject('store')(observer(Women));

