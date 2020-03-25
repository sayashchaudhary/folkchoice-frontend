import React from 'react';
import { inject, observer } from 'mobx-react';
import { GlobalProps } from '../../App';
import Navbar from '../Shared/Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Shared/Footer/Footer'
import Slider, { SliderData } from '../Shared/Carousel/Carousel';
import Tiles, { TilesProps } from '../Shared/Tiles/Tiles';
import { RoutePath } from '../../routing/routes';

const dummyslider: SliderData[] = [
    { caption: 'cosmetics' },
    { caption: 'exclusive' },
    { caption: 'clothing' }
];

const categoryTiles: TilesProps[] = [
    {
        text: 'CLOTHING',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSOgQfJVjwL6nX9us8M8sszxCqjjoglYN9bVRhg3lCC2cVaha3',
        link: RoutePath.clothing
    },
    {
        text: 'COSMETICS',
        imageUrl: 'https://jw-webmagazine.com/wp-content/uploads/2019/07/jw-5d1b48ed789c29.07523610.jpeg',
        link: RoutePath.cosmetics
    },
];


const Landing: React.FC<GlobalProps> = (props) => {
    console.log(props);
    const rootStore = props.store!;
    const userStore = rootStore.userStore;
    console.log('User store', userStore);
    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="landing-container">
                <Slider
                    data={dummyslider}
                />
                <div className="row ">
                    {
                        categoryTiles.map((t, index) => {
                            return (
                                <div className="col-md-6" key={index}>
                                    <Tiles link={t.link} imageUrl={t.imageUrl} text={t.text}/>
                                </div>
                            )
                        })
                    }
                </div>
                <Dashboard/>
                <Footer/>
            </div>
        </div>
    )
};


export default inject('store')(observer(Landing));
