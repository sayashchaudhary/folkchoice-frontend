import React from 'react';
import Tiles, { TilesProps } from '../Shared/Tiles/Tiles';
import Market, { MarketProps } from '../Shared/Market/Market';
import Navbar from '../Shared/Navbar/Navbar';
import Slider, { SliderData } from '../Shared/Carousel/Carousel';
import Footer from '../Shared/Footer/Footer';
import { RoutePath } from "../../routing/routes";

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
        text: 'GABRU',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEzDjENz1AjhT5nYUsJp4PJwVFLEzpclKLHPvHGNpKWmydb303',
        link: RoutePath.products
    }
];

const dummyMarkets: MarketProps[] = [
    {shop: 'Rama Traders', category: 'Ethnic, Casuals, Formals', id: 1},
    {shop: 'Rama Traders', category: 'Ethnic, Casuals, Formals', id: 2},
    {shop: 'Rama Traders', category: 'Ethnic, Casuals, Formals', id: 3},
    {shop: 'Rama Traders', category: 'Ethnic, Casuals, Formals', id: 4},
    {shop: 'Rama Traders', category: 'Ethnic, Casuals, Formals', id: 5},
    {shop: 'Rama Traders', category: 'Ethnic, Casuals, Formals', id: 6},
    {shop: 'Rama Traders', category: 'Ethnic, Casuals, Formals', id: 7},
    {shop: 'Rama Traders', category: 'Ethnic, Casuals, Formals', id: 8}
];

const dummySlider: SliderData[] = [
    {caption: ''},
    {caption: ''},
    {caption: ''}
];
const Men: React.FC = () => {
    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="row men">
                <div className="col-sm-1 col-md-1"/>
                {
                    dummyTiles.map(t => {
                        return (
                            <div className="col-sm-4 col-md-4 col-lg-2 men__spacing">
                                <Tiles imageUrl={t.imageUrl} text={t.text} link={t.link} />
                            </div>
                        );
                    })
                }
                <div className="col-sm-1 col-md-1"/>
            </div>
            <div className="row">
                <div>
                    <Slider data={dummySlider}/>
                </div>
            </div>

            <div className="row">
                {
                    dummyMarkets.map(m => {
                        return (
                            m.id <= 4 ?
                                <div className="col-md-6 pt-3 clothing__spacing">
                                    <Market shop={m.shop} category={m.category} id={m.id}/>
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
                    dummyMarkets.map(m => {
                        return (
                            <div className="col-md-6 pt-3 clothing__spacing">
                                <Market shop={m.shop} category={m.category} id={m.id}/>
                            </div>
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

export default Men;
