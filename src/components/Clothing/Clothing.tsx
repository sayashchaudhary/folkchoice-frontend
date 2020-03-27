import React, { useEffect } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Slider, { SliderData } from '../Shared/Carousel/Carousel';
import Footer from '../Shared/Footer/Footer';
import Tiles, { TilesProps } from "../Shared/Tiles/Tiles";
import Market, { MarketProps } from "../Shared/Market/Market";
import { RoutePath } from "../../routing/routes";
import { inject, observer } from "mobx-react";
import { GlobalProps } from "../../App";
import { marketController } from "../../controllers/market.controller";

const dummyTiles: TilesProps[] = [
    {
        text: 'MEN CLOTHING',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEzDjENz1AjhT5nYUsJp4PJwVFLEzpclKLHPvHGNpKWmydb303',
        link: RoutePath.men
    },
    {
        text: 'WOMEN CLOTHING',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDgZMRkeqJWQ0E_UF8euHcOJcdZFU6v0e5-QDK72jGMI7UPi_N',
        link: RoutePath.women
    },
    {
        text: 'KIDS CLOTHING',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBc-elmXE8KdWSPTv8JlXxiOmaI9Yww6ywW006iuycEb6iSZLB',
        link: RoutePath.kids
    },
    {
        text: 'SECOND INNINGS',
        imageUrl: 'https://www.buckandbuck.com/media/catalog/product/cache/ed87568b890e2f3fc93cb0ae3e77131d/3/1/31rx_2009_srgb_1_1.jpg',
        link: RoutePath.secondInnings
    }
];

const dummySlider: SliderData[] = [
    {caption: ''},
    {caption: ''},
    {caption: ''}
];

const Clothing: React.FC<GlobalProps> = (props: GlobalProps) => {
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
            <div className="clothing">
                <div className="row">
                    {
                        dummyTiles.map(t => {
                            return (
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3 clothing__spacing">
                                    <Tiles link={t.link} imageUrl={t.imageUrl} text={t.text}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row">
                    <div className="clothing__carousel">
                        <Slider data={dummySlider}/>
                    </div>
                </div>
                <div className="row">
                    <div className="clothing__text pt-2">
                        <h1>Check them Out:</h1>
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
                    <div className="clothing__carousel">
                        <Slider data={dummySlider}/>
                    </div>
                </div>

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

export default inject('store')(observer(Clothing));
