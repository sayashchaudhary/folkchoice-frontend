import React from 'react';
import {TilesProps} from "../Shared/Tiles/Tiles";
import {MarketProps} from "../Shared/Market/Market";
import Navbar from "../Shared/Navbar/Navbar";
import Tiles from "../Shared/Tiles/Tiles";
import Market from "../Shared/Market/Market";
import Slider, {SliderData} from '../Shared/Carousel/Carousel';

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
        text: 'CHICK',
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
    {shop: 'Rama Traders', category: 'Ethnic, Casuals, Formals', id: 8},
    {shop: 'Rama Traders', category: 'Ethnic, Casuals, Formals', id: 9},
    {shop: 'Rama Traders', category: 'Ethnic, Casuals, Formals', id: 10},
    {shop: 'Rama Traders', category: 'Ethnic, Casuals, Formals', id: 11},
    {shop: 'Rama Traders', category: 'Ethnic, Casuals, Formals', id: 12}
];

const dummySlider: SliderData[] = [
    {caption: ''},
    {caption: ''},
    {caption: ''}
];
const Women: React.FC = () => {
    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="row">
                {
                    dummyTiles.map(t => {
                        return (
                            <div className="col-6 col-sm-6 col-md-4 col-lg-3 ">
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
                            m.id <= 4 ? <div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                                    <Market shop={m.shop} category={m.category} id={m.id}/>
                                </div>
                            </div> : null
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
                            <div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                                    <Market shop={m.shop} category={m.category} id={m.id}/>
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        </div>
    );
}

export default Women;
