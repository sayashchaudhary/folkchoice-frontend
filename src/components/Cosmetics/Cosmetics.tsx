import React, { useEffect } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import Tiles, { TilesProps } from "../Shared/Tiles/Tiles";
import Slider, { SliderData } from "../Shared/Carousel/Carousel";
import Market, { MarketProps } from "../Shared/Market/Market";
import { inject, observer } from "mobx-react";
import { GlobalProps } from "../../App";
import { marketController } from "../../controllers/market.controller";

const genderTiles: TilesProps[] = [
    {
        text: 'BODY CARE',
        imageUrl: 'https://previews.123rf.com/images/subbotina/subbotina1802/subbotina180200077/96466627-aloe-vera-closeup-sliced-aloevera-natural-organic-renewal-cosmetics-alternative-medicine-organic-ski.jpg'
    },
    {
        text: 'SKIN CARE',
        imageUrl: 'https://lh3.googleusercontent.com/proxy/Y6GNB0Kcc2Lk117lKFuGd-wiBIKc3VRw9Hch5J7I48ugcWxmBihEonzlsbKFUWG64kbHPRpTOpDzN-efbZkWS8difP2zDBX2FHFkTBCwOAyxqVpbR_9IjdC0PL_9qKvhRRnlVqxJaA'
    },
    {
        text: 'HAIR CARE',
        imageUrl: 'https://www.jyotisehgalvig.com/wp-content/uploads/2019/05/haircare.png'
    },
    {
        text: 'LIP CARE',
        imageUrl: 'https://cdn2.stylecraze.com/wp-content/uploads/2012/02/Care-For-Your-Lips-1.jpg'
    },
    {
        text: 'BEAUTY CARE',
        imageUrl: 'https://shathayu.com/wp-content/uploads/2016/07/Beauty-care.jpg'
    },
    {
        text: 'AROMA',
        imageUrl: 'https://s7d5.scene7.com/is/image/UrbanOutfitters/35402403_034_b?$xlarge$&hei=900&qlt=80&fit=constrain'
    }
];

const dummySlider: SliderData[] = [
    {caption: ''},
    {caption: ''},
    {caption: ''},
];

const Cosmetics: React.FC<GlobalProps> = (props: GlobalProps) => {
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
                            <div className="col-md-2 col-sm-2">
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
            <Footer/>
        </div>
    )
};

export default inject('store')(observer(Cosmetics));

