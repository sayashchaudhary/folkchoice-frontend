import React, { useEffect } from 'react';
import Tiles, { TilesProps } from '../Shared/Tiles/Tiles';
import Slider, { SliderData } from '../Shared/Carousel/Carousel';
import Market, { MarketProps } from '../Shared/Market/Market';
import Footer from '../Shared/Footer/Footer';
import Navbar from "../Shared/Navbar/Navbar";
import { RoutePath } from "../../routing/routes";
import { GlobalProps } from "../../App";
import { marketController } from "../../controllers/market.controller";
import { inject, observer } from "mobx-react";

const genderTiles: TilesProps[] = [
    {
        text: 'GENTLEMAN',
        imageUrl: 'https://i1.wp.com/plazauomo.se/wp-content/uploads/2018/12/Squarzi2-e1545925942761.jpg?resize=800%2C633&ssl=1',
        link: RoutePath.products
    },
    {
        text: 'LADY',
        imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/karlie-kloss-is-seen-wearing-a-baby-blue-ralph-lauren-news-photo-1575557364.jpg?resize=768:*',
        link: RoutePath.products
    }
];

const dummySlider: SliderData[] = [
    {caption: ''},
    {caption: ''},
    {caption: ''},
];

const categoryTiles: TilesProps[] = [
    {
        text: 'CASUALS',
        imageUrl: 'https://i.pinimg.com/564x/52/da/f5/52daf5bde1f3cc93c50d92712b6681e9.jpg',
        link: RoutePath.products
    },
    {
        text: 'FORMALS',
        imageUrl: 'https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        link: RoutePath.products
    },
    {
        text: 'COTTAN SAREES',
        imageUrl: 'https://cdn.shopify.com/s/files/1/1420/5588/products/IMG_4502_600x.jpg?v=1559167077',
        link: RoutePath.products
    },
    {
        text: 'DHOTI KURTA',
        imageUrl: 'https://images.manyavar.com/product_images/14754/qty_30/1.JPG?1551703540',
        link: RoutePath.products
    }
];

const SecondInnings: React.FC<GlobalProps> = (props: GlobalProps) => {
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
                            <div className="col-md-6">
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
                {
                    categoryTiles.map(t => {
                        return (
                            <div className="col-sm-3 col-md-3">
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
            <Footer/>
        </div>
    )
};

export default inject('store')(observer(SecondInnings));
