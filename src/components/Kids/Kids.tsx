import React from 'react';
import Tiles, {TilesProps} from "../Shared/Tiles/Tiles";
import Slider, {SliderData} from "../Shared/Carousel/Carousel"
import Market, {MarketProps} from "../Shared/Market/Market";
import Navbar from '../Shared/Navbar/Navbar';
import Footer from "../Shared/Footer/Footer";

const genderTiles: TilesProps[] = [
    {
        text: 'HIM',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPhy64NekYcxLFgv26oqXQE99uCCqj02Ek8KyqoTTnHq41fehT',
        // link: ''
    },
    {
        text: 'HER',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUHHVpDgnLxLMRC15Tw84cDfA7meuahwyXoJepq0XkhBJbMgSE',
        // link: ''
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
        // link: ''
    },
    {
        text: '6-12 MONTHS',
        imageUrl: 'https://rukminim1.flixcart.com/image/832/832/jfyaf0w0/poster/w/a/7/small-happy-baby-for-play-nps000000695-original-imaf4arg3zuj3prn.jpeg?q=70',
        // link: ''
    },
    {
        text: '12-24 MONTHS',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT94rnMZMjR0q08Ge94-dT8emVXST-qXp2LBi_8JmpRAlVnI5I-',
        // link: ''
    },
    {
        text: '2-3 YEARS',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ40q5jEzZt0OK_klpx955hKbRNkUyKsYoddinaQU1f2KTYojER',
        // link: ''
    }
];

const categoryTiles: TilesProps[] = [
    {
        text: 'CASUALS',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRb4XMisCsJwXPkuglPKW4m-DcSNUmOhfiQ5_WFJQyLCCZ7dMT1',
        // link: ''
    },
    {
        text: 'ETHNIC',
        imageUrl: 'https://cdn.shopify.com/s/files/1/2283/0119/products/1_d5a0e6db-4f8f-42f2-a620-d8fec9e6ac12_1024x1024@2x.jpg?v=1571610306',
        // link: ''
    },
    {
        text: 'PARTYWEAR',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTsb4oNVF5E5iUfr-C5qTAmtt51rCOYt8enkpFvZuFqKW-Z3jr',
        // link: ''
    }
];

const dummyMarket: MarketProps[] = [
    {shop: 'Rama Traders', category: 'Ethnic, Casuals, Formals', id: 1},
    {shop: 'Rama Traders', category: 'Ethnic, Casuals, Formals', id: 2},
    {shop: 'Rama Traders', category: 'Ethnic, Casuals, Formals', id: 3},
    {shop: 'Rama Traders', category: 'Ethnic, Casuals, Formals', id: 4},
];

const Kids: React.FC = () => {
    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="row kids">
                {
                    genderTiles.map(t => {
                        return (
                            <div className="col-6 col-sm-6 col-md-6 kids__spacing">
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
                    dummyMarket.map(m => {
                        return (
                            <div className="col-md-6 kids__spacing">
                                <Market shop={m.shop} category={m.category} id={m.id}/>
                            </div>
                        )
                    })
                }
            </div>
            <Footer/>
        </div>
    )
};

export default Kids;
