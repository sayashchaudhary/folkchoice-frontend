import React from 'react';
import {TilesProps} from '../Shared/Tiles/Tiles';
import {MarketProps} from '../Shared/Market/Market';
import Navbar from '../Shared/Navbar/Navbar';
import Tiles from '../Shared/Tiles/Tiles';
import Market from '../Shared/Market/Market';
import Slider, {SliderData} from '../Shared/Carousel/Carousel';
import Footer from '../Shared/Footer/Footer';

const dummyTiles: TilesProps[] = [
    {
        text: 'CASUAL',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEzDjENz1AjhT5nYUsJp4PJwVFLEzpclKLHPvHGNpKWmydb303',

    },
    {
        text: 'FORMALS',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEzDjENz1AjhT5nYUsJp4PJwVFLEzpclKLHPvHGNpKWmydb303',

    },
    {
        text: 'ETHNIC',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEzDjENz1AjhT5nYUsJp4PJwVFLEzpclKLHPvHGNpKWmydb303',

    },
    {
        text: 'SPORTS',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEzDjENz1AjhT5nYUsJp4PJwVFLEzpclKLHPvHGNpKWmydb303',

    },
    {
        text: 'GABRU',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEzDjENz1AjhT5nYUsJp4PJwVFLEzpclKLHPvHGNpKWmydb303',

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
                {
                    dummyTiles.map(t => {
                        return (
                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2 col-lg-offset-1 men__spacing">
                                <Tiles imageUrl={t.imageUrl} text={t.text}/>
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
                <Footer />
            </div>
        </div>
    );
};

export default Men;
